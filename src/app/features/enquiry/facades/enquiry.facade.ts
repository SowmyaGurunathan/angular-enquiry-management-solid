import { Inject, Injectable } from '@angular/core';
import { NOTIFICATION_TOKEN } from '../../../core/notification/notification.token';
import { EnquiryApiService } from '../services/enquiry-api.service';
import { Enquiry } from '../interfaces/enquiry.model';
import { EmailNotification } from '../../../core/notification/notification.interface';

@Injectable({ providedIn: 'root' })
export class EnquiryFacade {

  constructor(
    private api: EnquiryApiService,
    @Inject(NOTIFICATION_TOKEN) private notification: EmailNotification
  ) {}

  submit(enquiry: Enquiry): void {
    this.api.submitEnquiry(enquiry);
    this.notification.sendEmail('Enquiry submitted successfully');
  }
}
