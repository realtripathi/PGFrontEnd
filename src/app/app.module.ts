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
    NodalRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
