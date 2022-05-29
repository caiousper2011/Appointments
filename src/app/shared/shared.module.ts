import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatListModule, MatIconModule, MatProgressBarModule, MatChipsModule],
})
export class SharedModule {}
