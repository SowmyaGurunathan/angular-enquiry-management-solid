import { Injectable } from '@angular/core';
import { Enquiry } from '../interfaces/enquiry.model';

@Injectable({ providedIn: 'root' })
export class EnquiryApiService {

  submitEnquiry(enquiry: Enquiry): void {
    console.log('Submitting enquiry to API', enquiry);
    // later → HttpClient.post()
  }

}
