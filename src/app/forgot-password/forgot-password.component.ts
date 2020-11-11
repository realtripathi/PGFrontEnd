import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPassword } from '../forgotPassword'
import { MinistryService } from '../ministry.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private ministryService:MinistryService, private router: Router) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }  

  forgotPasswordModel = new ForgotPassword();

  forgotPasswordModules = ['Student', 'Institute'];

  recoverPassword( value1,value2,value3 ){
   if(value1=="Student"){
     this.ministryService.studentForgotPassword(value2,value3).subscribe();
     this.router.navigate(['studentLogin']);
   }
   if(value1=="Institute"){
     this.ministryService.instituteForgotPassword(value2,value3).subscribe();
     this.router.navigate(['instituteLogin']);
   }
  }
}
