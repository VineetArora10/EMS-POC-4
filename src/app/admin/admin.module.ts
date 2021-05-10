import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ADashboardComponent } from './a-dashboard/a-dashboard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ADashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ADashboardComponent
  ]
})
export class AdminModule { }
