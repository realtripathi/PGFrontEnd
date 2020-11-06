import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InstituteRegisterComponent } from './institute-register/institute-register.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { InstituteLoginComponent } from './institute-login/institute-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { NodalLoginComponent } from './nodal-login/nodal-login.component';
import { MinistryLoginComponent } from './ministry-login/ministry-login.component';
import { NodalRegisterComponent } from './nodal-register/nodal-register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SchemeRegisterComponent } from './scheme-register/scheme-register.component';
import { ScholarshipformRegisterComponent } from './scholarshipform-register/scholarshipform-register.component';
import { MinistryDashComponent } from './ministry-dash/ministry-dash.component';
import { MinistryProfileComponent } from './ministry-profile/ministry-profile.component';
import { MinistryFormVerificationComponent } from './ministry-form-verification/ministry-form-verification.component';
import { MinistryViewNodalComponent } from './ministry-view-nodal/ministry-view-nodal.component';
import { MinistryViewInstituteComponent } from './ministry-view-institute/ministry-view-institute.component';
import { NodalDashComponent } from './nodal-dash/nodal-dash.component';
import { NodalProfileComponent } from './nodal-profile/nodal-profile.component';
import { NodalFormViewComponent } from './nodal-form-view/nodal-form-view.component';
import { NodalInstituteViewComponent } from './nodal-institute-view/nodal-institute-view.component';
import { InstituteProfileComponent } from './institute-profile/institute-profile.component';
import { InstituteDashComponent } from './institute-dash/institute-dash.component';
import { InstituteFormViewComponent } from './institute-form-view/institute-form-view.component';
import { InstituteStudentViewComponent } from './institute-student-view/institute-student-view.component';
import { StudentDashComponent } from './student-dash/student-dash.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentSchemeapplyComponent } from './student-schemeapply/student-schemeapply.component';
import { InstituteStudentVerifyComponent } from './institute-student-verify/institute-student-verify.component';
import { HttpClientModule } from '@angular/common/http';
import { InstituteService } from './institute.service';

@NgModule({
  declarations: [
    AppComponent,
    InstituteRegisterComponent,
    HomeComponent,
    AboutUsComponent,
    StudentRegisterComponent,
    InstituteLoginComponent,
    StudentLoginComponent,
    NodalLoginComponent,
    MinistryLoginComponent,
    NodalRegisterComponent,
    ForgotPasswordComponent,
    PageNotFoundComponent,
    SchemeRegisterComponent,
    ScholarshipformRegisterComponent,
    MinistryDashComponent,
    MinistryProfileComponent,
    MinistryFormVerificationComponent,
    MinistryViewNodalComponent,
    MinistryViewInstituteComponent,
    NodalDashComponent,
    NodalProfileComponent,
    NodalFormViewComponent,
    NodalInstituteViewComponent,
    InstituteProfileComponent,
    InstituteDashComponent,
    InstituteFormViewComponent,
    InstituteStudentViewComponent,
    StudentDashComponent,
    StudentProfileComponent,
    StudentSchemeapplyComponent,
    InstituteStudentVerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [InstituteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
