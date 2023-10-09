import nodemailer from "nodemailer";

export async function sendEmail(name: string, text: string, attachments: { filename: string; path: string; }[]): Promise<void> {

    const transporter = nodemailer.createTransport({
        // @ts-ignore
        service: "gmail",
        auth: {
            type: process.env.AUTH_TYPE,
            user: process.env.USER,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: process.env.ACCESS_TOKEN,
        },
    })

    console.log("#3# <ENV>", process.env.USER);

    const mailOptions = {
        from: 'responsabile.hr@hknpolito.org',
        to: 'albertobaroso999@gmail.com',
        subject: `RECRUITMENT - ${name} SUBMISSION`,
        attachments,
        text,
    };

    await new Promise<void>((resolve, reject) => {
        transporter.sendMail(mailOptions, (err: any, response: any) => {
            if (err) {
                reject(err);
            } else {
                resolve(response);
            }
        });
    });
}