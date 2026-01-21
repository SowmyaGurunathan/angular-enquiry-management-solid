import { InjectionToken } from '@angular/core';
import { AppNotification } from './notification';

export const NOTIFICATION_TOKEN =
  new InjectionToken<AppNotification>('NOTIFICATION_TOKEN');
