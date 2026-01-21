import { Injectable } from '@angular/core';
import { EmailNotification } from './notification.interface';

@Injectable()
export class EmailNotificationService implements EmailNotification {
  sendEmail(message: string): void {
    console.log('📧 Email notification:', message);
  }
}
