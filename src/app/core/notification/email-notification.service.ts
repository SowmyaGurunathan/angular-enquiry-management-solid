import { Injectable } from '@angular/core';
import { AppNotification } from './notification';

@Injectable()
export class EmailNotificationService implements AppNotification {
  send(message: string): void {
    console.log('📧 Email notification:', message);
  }
}
