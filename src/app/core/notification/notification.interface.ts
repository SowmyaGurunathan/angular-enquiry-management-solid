export interface EmailNotification {
  sendEmail(message: string): void;
}

export interface SmsNotification {
  sendSms(message: string): void;
}
