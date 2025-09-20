import { NextApiRequest, NextApiResponse } from 'next'
import { sendEmail } from "@/service/mailService";
import { shareNewApply, sendApplyFailedMessage } from "./telegram";
import formidable from 'formidable';

const logger = require('pino')()
import { z } from 'zod';

const schema = z.object({
    name: z.string().min(1).max(200),
    average: z.number().min(25.6).max(30),
    email: z.string().email(),
    degree: z.enum(["Bachelor", "Master", "PhD"]),
    course: z.string(),
    area: z.optional(z.string())
});

function formatData(data: { [key: string]: string | number }) {
    return `Name: ${data.name}\nEmail: ${data.email}\nGrades average: ${data.average}\n` +
        `Degree: ${data.degree}\nCourse: ${data.course}\nArea: ${data.area ?? '-'}\nData: ${formatDate()}`;
}

export function handleError(error: unknown, message: string) {
    // TODO: NOTIFY IT SUPPORT
    logger.error(`${message}: ${error}`);
}

function flatten(fields: { any: [any] }) {
    return Object.fromEntries(
        Object.entries(fields).map(([key, value]) => {
            return [key, value[0]];
        })
    );
}

export const config = {
    api: {
        bodyParser: false
    }
}

function formatDate() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
    const year = date.getFullYear();

    return `${hours}:${minutes} ${day}/${month}/${year}`;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        logger.info('New application received');
        const { method } = req;

        if (method === 'POST') {

            // File validation
            const options = {
                maxFiles: 2,
                maxFileSize: 1048576 * 5, // 5MB
                filter: function({ mimetype }: { mimetype: string }) {
                    return mimetype && mimetype === 'application/pdf';
                },
            };

            let fieldsSingle, parsedFields;
            let form, fields, files;

            try {
                // @ts-ignore
                form = formidable(options);
                [fields, files] = await form.parse(req);
            } catch (e) {
                handleError('Files validatation', 'Files too large or incorrect');
                return res.status(413).json({
                    message: "The files you provided were too large or not in the correct format. Try again.",
                });
            }

            // @ts-ignore
            fieldsSingle = flatten(fields);
            fieldsSingle.average = Number(fieldsSingle.average);

            // Field validation
            try {
                parsedFields = schema.parse(fieldsSingle);
                logger.info('Field validated')
            } catch (e) {
                handleError('Field validatation', 'Incorrect data provided');
                return res.status(422).json({
                    message: "The provided data was incorrect or invalid, try again",
                });
            }

            // Send email to HR
            try {
                const mailSubjectHR = `RECRUITMENT - ${parsedFields.name} SUBMISSION`;
                const mailSubjectApplicant = `Your application was successful!`;
                const mailBodyHR = `Nuova apply ricevuta alle ${formatDate()}\n\n${formatData(parsedFields)}`;
                const mailBodyApplicant = `Thank you for applying to the Mu Nu Chapter of IEEE-Eta Kappa Nu!\nExpect to hear from us shortly. In the meanwhile here's the data we've received. If there is any error feel free to re-submit the application form.\n\n${formatData(parsedFields)}`;
                const attachments = [
                    {
                        filename: 'Curriculum.pdf',
                        // @ts-ignore
                        path: files.cv[0].filepath,
                    },
                    {
                        filename: 'StudyPath.pdf',
                        // @ts-ignore
                        path: files.studyPlan[0].filepath,
                    }
                ];
                await sendEmail(mailSubjectHR, mailBodyHR, process.env.HKN_RECRUITMENT_EMAIL, attachments);
                logger.info('Apply Email sent to HR');
                await sendEmail(mailSubjectApplicant, mailBodyApplicant, parsedFields.email, attachments);
                logger.info('Confirmation Email sent to applicant');

                try {
                    await shareNewApply(parsedFields.name);
                    logger.info('Telegram notification sent');
                } catch (e) {
                    handleError(e, 'Telegram notification');
                }

            } catch (e) {
                const stage = "Confirmation Emails";
                await sendApplyFailedMessage(stage, parsedFields.name);
                handleError(e, stage);
            }

            res.status(200).send("");
        } else {
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (err: any) {
        handleError(err, 'Application');
        res.status(500).json({ message: err.message });
    }
}
