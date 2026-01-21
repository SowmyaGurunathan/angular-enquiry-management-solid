import { Injectable } from '@angular/core';
import { SmsNotification } from './notification.interface';

@Injectable()
export class SmsNotificationService implements SmsNotification {
  sendSms(message: string): void {
    console.log('📱 SMS notification:', message);
  }
}
