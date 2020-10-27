import { MinistryLoginComponent } from './ministry-login/ministry-login.component';
import { NodalLoginComponent } from './nodal-login/nodal-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { InstituteLoginComponent } from './institute-login/institute-login.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { InstituteRegisterComponent } from './institute-register/institute-register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NodalRegisterComponent } from './nodal-register/nodal-register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'freshInstitute', component: InstituteRegisterComponent},
  {path: 'freshStudent', component: StudentRegisterComponent},
  {path: 'instituteLogin', component: InstituteLoginComponent},
  {path: 'studentLogin', component: StudentLoginComponent},
  {path: 'nodalLogin', component: NodalLoginComponent},
  {path: 'ministryLogin', component:MinistryLoginComponent},
  {path: 'instituteRegistration', component:InstituteRegisterComponent},
  {path: 'nodalRegistration' , component:NodalRegisterComponent},
  {path: 'studentRegistration' , component:StudentRegisterComponent},
  {path: 'nodalRegistration' , component:NodalRegisterComponent},
  {path: 'studentRegistration' , component:StudentRegisterComponent},
  {path: 'forgotPassword' , component:ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
