import { Injectable } from '@angular/core';
import { AppNotification } from './notification';

@Injectable()
export class SmsNotificationService implements AppNotification {
  send(message: string): void {
    console.log('📱 SMS notification:', message);
  }
}
