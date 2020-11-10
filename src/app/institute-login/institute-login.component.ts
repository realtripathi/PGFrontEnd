import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { InstituteLogin } from "../institute-login";
import { InstituteService } from '../institute.service';

@Component({
  selector: 'app-institute-login',
  templateUrl: './institute-login.component.html',
  styleUrls: ['./institute-login.component.css']
})
export class InstituteLoginComponent extends AppComponent implements OnInit {

  constructor(private instituteService : InstituteService, private router : Router, private appComponent: AppComponent) {
    super();
  }

  ngOnInit(): void {
      sessionStorage.clear();
  }

  instituteLogin = new InstituteLogin();

  login(){
    //alert(JSON.stringify(this.login));
    this.instituteService.login(this.instituteLogin).subscribe(data => {
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        sessionStorage.setItem('userType','institute');
        this.appComponent.ngOnInit();
        sessionStorage.setItem('instituteId',String(this.instituteLogin.instituteId));
        this.router.navigate(['instituteDashboard/profile']);
      }
      else {
        alert("EORROR");
      }
    })
  }

}
