import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
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
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'freshStudent' , component:StudentRegisterComponent},
  {path: 'freshInstitute', component:InstituteRegisterComponent},
  {path: 'freshNodal', component: NodalRegisterComponent},
  {path: 'studentLogin', component: StudentLoginComponent},
  {path: 'instituteLogin', component: InstituteLoginComponent},
  {path: 'nodalLogin', component: NodalLoginComponent},
  {path: 'ministryLogin', component:MinistryLoginComponent},
  {path: 'forgotPassword' , component:ForgotPasswordComponent},
  {path: '**', component:PageNotFoundComponent} //Put this always in last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
