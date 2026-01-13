import { Component } from '@angular/core';
import { EnquiryFacade } from '../../facades/enquiry.facade';

@Component({
  selector: 'app-submit-enquiry',
  imports: [],
  templateUrl: './submit-enquiry.html',
  styleUrl: './submit-enquiry.css',
})
export class SubmitEnquiry {
   constructor(private enquiryFacade: EnquiryFacade) {}

  submit(): void {
    this.enquiryFacade.submit({
      name: 'Test User',
      email: 'test@mail.com',
      message: 'Testing SRP'
    });
  }

}
