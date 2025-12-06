import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doctor } from '../../types/doctor.interface';

@Component({
  selector: 'app-doctor-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctor-card.html',
  styleUrl: './doctor-card.scss',
})
export class DoctorCard {
  doctor = input.required<Doctor>();
}
