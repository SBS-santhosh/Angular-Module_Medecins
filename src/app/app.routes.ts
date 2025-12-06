import { Routes } from '@angular/router';
import { DoctorsPage } from './pages/doctors-page/doctors-page';

export const routes: Routes = [
    { path: 'medecins', component: DoctorsPage },
    { path: '', redirectTo: 'medecins', pathMatch: 'full' },
    { path: '**', redirectTo: 'medecins' }
];
