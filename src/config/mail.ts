import { Options } from "nodemailer/lib/smtp-connection";

const {
  SMTP_HOST = "smtp.gmail.com",
  SMTP_PORT = 465, //587,
  SMTP_USERNAME = "josephercoder@gmail.com",
  SMTP_PASSWORD = "Miliyoni1@",
} = process.env;

export const SMTP_OPTIONS: Options = {
  host: SMTP_HOST,
  port: +SMTP_PORT,
  secure: true,
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
};
