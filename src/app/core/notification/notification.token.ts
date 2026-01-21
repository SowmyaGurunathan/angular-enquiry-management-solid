import { InjectionToken } from '@angular/core';
import { EmailNotification } from './notification.interface';

export const NOTIFICATION_TOKEN =
  new InjectionToken<EmailNotification>('NOTIFICATION_TOKEN');
