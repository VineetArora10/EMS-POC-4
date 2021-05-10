import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainloginComponent } from './mainlogin/mainlogin.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainloginComponent,
    EmploginComponent,
    AdminloginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainloginComponent,
    EmploginComponent,
    AdminloginComponent
  ]
})
export class LoginModule { }
