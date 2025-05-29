"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = sendEmail;
const jobber_shared_1 = require("@aprydatko/jobber-shared");
const config_1 = require("../config");
const helper_1 = require("../helper");
const log = (0, jobber_shared_1.winstonLogger)(`${config_1.config.ELASTIC_SEARCH_URL}`, 'mailTransport', 'debug');
function sendEmail(template, receiverEmail, locals) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // email template
            (0, helper_1.emailTemplates)(template, receiverEmail, locals);
            log.info('Email sent successfully.');
        }
        catch (error) {
            log.log('error', 'NotificationService MailTransport sendMail() method error:', error);
        }
    });
}
//# sourceMappingURL=mail.transport.js.map