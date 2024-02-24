import nodemailer from "nodemailer";

export async function sendEmail(
  subject: string,
  body: string,
  to: string = "recruitment@hknpolito.org",
  attachments: { filename: string; path: string }[] = []
): Promise<void> {
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
  });

  const mailOptions = {
    from: process.env.HKN_RECRUITMENT_EMAIL,
    to,
    subject,
    attachments,
    body,
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
