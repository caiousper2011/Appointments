import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AppointmentService } from '../shared/appointment.service';
import { Appointment } from '../shared/interfaces/appointment';

interface AppointmentDate extends Appointment {
  appointmentDate: string;
}
@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.scss'],
})
export class MyAppointmentsComponent {
  public appointments$: Observable<AppointmentDate[]>;
  private googleMapsURL = 'http://maps.google.com/?q=';
  constructor(private appointmentService: AppointmentService) {
    this.appointments$ = this.appointmentService
      .getAvailableAppointments()
      .pipe(
        map((appointments) =>
          appointments.map((appointment) => ({
            ...appointment,
            appointmentDate: this.formatDate(appointment.start.dateTime),
          }))
        )
      );
  }

  openLocation(location: string): void {
    window.open(`${this.googleMapsURL}${location}`, '_blank');
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  }
}
