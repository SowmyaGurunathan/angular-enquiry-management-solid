import { Injectable } from '@angular/core';
import { EnquiryApiService } from '../services/enquiry-api.service';
import { Enquiry } from '../interfaces/enquiry.model';

@Injectable({ providedIn: 'root' })
export class EnquiryFacade {

  constructor(private api: EnquiryApiService) {}

  submit(enquiry: Enquiry): void {
    this.api.submitEnquiry(enquiry);
  }

}
