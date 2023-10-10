import {NextApiRequest, NextApiResponse} from 'next'
import formidable, {PersistentFile} from 'formidable';
import {writeFile, mkdir, readFile} from 'fs/promises';
import {sendEmail} from "@/service/mailService";

const logger = require('pino')()
import {z} from 'zod';

const schema = z.object({
    name: z.string().min(1).max(200),
    average: z.number().min(25.6).max(30),
    email: z.string().email().toLowerCase().endsWith('polito.it'),
    degree: z.enum(["Bachelor", "Master", "PhD"]),
    course: z.enum(["COMPUTER TECHNOLOGY", "ELECTRICAL", "ELECTRONIC", "BIOMEDICAL", "PHYSICS", "MATHEMATIC", "ENERGY", "CINEMA AND MEDIA"]),
    area: z.optional(z.string())
});

function randomID() {
    return Array.from({length: 16}, () => Math.floor(Math.random() * 10)).join('');
}

// @ts-ignore
async function saveFileLocally(file: PersistentFile, applicant: string, name: string) {
    await writeFile(getApplicationPath(applicant, name), await readFile(file.filepath));
}

function formatData(data: { [key: string]: string | number }) {
    return `Nome: ${data.name}\nEmail: ${data.email}\nMedia Voti: ${data.average}\n` +
        `Laurea: ${data.degree}\nCorso: ${data.course}\nArea: ${data.area}\nData: ${formatDate()}`;
}

function getApplicationPath(applicant: string, file: string) {
    return `./applications/${applicant}/${file}`;
}

async function saveInfoLocally(data: { [key: string]: string | number }, applicant: string) {
    await writeFile(getApplicationPath(applicant, 'info.txt'), formatData(data));
}

async function saveApplicationLocally(data: { [key: string]: string | number }, files: {
    cv: [File],
    studyPlan: [File]
}) {
    const applicant = randomID();
    await mkdir(getApplicationPath(applicant, ''), {recursive: true});
    await saveInfoLocally(data, applicant);
    await saveFileLocally(files.cv[0], applicant, 'curriculum.pdf');
    await saveFileLocally(files.studyPlan[0], applicant, 'study-plan.pdf');
}

function handleError(e: unknown, type: string) {
    logger.error(e)
    // TODO: NOTIFY IT SUPPORT
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
        const {method} = req;

        if (method === 'POST') {

            // File validation
            const options = {
                maxFiles: 2,
                maxFileSize: 2097152,
                filter: function ({mimetype}: { mimetype: string }) {
                    return mimetype && mimetype === 'application/pdf';
                }
            };
            // @ts-ignore
            const form = formidable(options);
            const [fields, files] = await form.parse(req);
            // TODO: Send wrong files and check it fails
            // @ts-ignore
            const fieldsSingle = flatten(fields);
            fieldsSingle.average = Number(fieldsSingle.average);
            let parsedFields;

            // Field validation
            try {
                parsedFields = schema.parse(fieldsSingle);
            } catch (e) {
                return res.status(404).json({
                    message: "The provided data was incorrect or invalid, try again",
                });
            }

            // Save Application locally
            try {
                // @ts-ignore
                await saveApplicationLocally(parsedFields, files);
            } catch (e) {
                handleError(e, 'Local');
            }

            // Send email to HR
            try {
                const mailText = `Nuova apply ricevuta alle ${formatDate()}\n\n${formatData(parsedFields)}`;
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
                await sendEmail(parsedFields.name, mailText, attachments);
                logger.info('Email sent')

            } catch (e) {
                handleError(e, 'Email');
            }

            res.status(200).send("");
        } else {
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
}