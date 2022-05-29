import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';
import { Appointment } from './interfaces/appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private BASE_URL = `${environment.baseUrl}/appointment`;

  constructor(private http: HttpClient) {}

  getAvailableAppointments(): Observable<Appointment[]> {
    return this.http.get(`${this.BASE_URL}/reserved`).pipe(tap(console.log));
  }
}
