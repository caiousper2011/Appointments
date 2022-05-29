import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DashboardComponent, MyAppointmentsComponent],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    MatCardModule,
    SharedModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
})
export class AppointmentsModule {}
