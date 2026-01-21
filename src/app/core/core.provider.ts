import { Provider } from '@angular/core';
import { NOTIFICATION_TOKEN } from './notification/notification.token';
import { EmailNotificationService } from './notification/email-notification.service';

export const CORE_PROVIDERS: Provider[] = [
  {
    provide: NOTIFICATION_TOKEN,
    useClass: EmailNotificationService
  }
];
