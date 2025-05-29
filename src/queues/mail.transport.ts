import { IEmailLocals, winstonLogger } from "@aprydatko/jobber-shared";
import { config } from "@notifications/config";
import { emailTemplates } from "@notifications/helper";
import { Logger } from "winston";

 
 
 const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'mailTransport', 'debug');

 async function sendEmail(template: string, receiverEmail: string, locals: IEmailLocals): Promise<void>{
  try {
    // email template
    emailTemplates(template, receiverEmail, locals);
    log.info('Email sent successfully.');
  } catch (error) {
    log.log('error', 'NotificationService MailTransport sendMail() method error:', error);
  }
 }
 
 export { sendEmail };