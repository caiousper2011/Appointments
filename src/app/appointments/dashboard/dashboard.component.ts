import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../shared/appointment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.appointmentService.getAvailableAppointments().subscribe(console.log);
  }

  openMyAppointments(): void {
    this.router.navigate(['my-appointments'], {
      relativeTo: this.activatedRoute,
    });
  }
}
