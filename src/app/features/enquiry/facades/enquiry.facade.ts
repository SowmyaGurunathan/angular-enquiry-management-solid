import { Inject, Injectable } from '@angular/core';
import { EnquiryApiService } from '../services/enquiry-api.service';
import { Enquiry } from '../interfaces/enquiry.model';
import { AppNotification } from '../../../core/notification/notification';
import { NOTIFICATION_TOKEN } from '../../../core/notification/notification.token';

@Injectable({ providedIn: 'root' })
export class EnquiryFacade {

  constructor(
    private api: EnquiryApiService,
    @Inject(NOTIFICATION_TOKEN) private notification: AppNotification
  ) {}

  submit(enquiry: Enquiry): void {
    this.api.submitEnquiry(enquiry);
    this.notification.send('Enquiry submitted successfully');
  }
}
