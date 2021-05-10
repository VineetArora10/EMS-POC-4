import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADashboardComponent } from './admin/a-dashboard/a-dashboard.component';
import { EDashboardComponent } from './employee/e-dashboard/e-dashboard.component';
import { AdminAuthGuard } from './guard/admin-auth.guard';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { AdminloginComponent } from './login/adminlogin/adminlogin.component';
import { EmploginComponent } from './login/emplogin/emplogin.component';
import { MainloginComponent } from './login/mainlogin/mainlogin.component';

const routes: Routes = [
  {
    path:'',
    component: MainloginComponent
  },
  {
    path:'mainlogin',
    component: MainloginComponent
  },
  {
    path:'emplogin',
    component: EmploginComponent
  },
  {
    path:'adminlogin',
    component: AdminloginComponent
  },
  {
    path:'edashboard',
    component: EDashboardComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:'adashboard',
    component: ADashboardComponent,
    canActivate: [AdminAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }