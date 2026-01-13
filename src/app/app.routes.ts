import { Routes } from '@angular/router';
import { Home } from './features/enquiry/pages/home/home';
import { SubmitEnquiry } from './features/enquiry/pages/submit-enquiry/submit-enquiry';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'submit-enquiry', component: SubmitEnquiry }


];
