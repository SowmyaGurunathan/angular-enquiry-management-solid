import { Routes } from '@angular/router';
import { Home } from './features/enquiry/pages/home/home';
import { SubmitEnquiry } from './features/enquiry/pages/submit-enquiry/submit-enquiry';
import { EnquiryList } from './features/enquiry/pages/enquiry-list/enquiry-list';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'submit-enquiry', component: SubmitEnquiry },
    { path: 'enquiry-list', component: EnquiryList }

];
