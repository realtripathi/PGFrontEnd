import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { MinistryLogin } from "../ministry-login";
import { MinistryService } from '../ministry.service';

@Component({
  selector: 'app-ministry-login',
  templateUrl: './ministry-login.component.html',
  styleUrls: ['./ministry-login.component.css']
})
export class MinistryLoginComponent extends AppComponent implements OnInit {



  constructor(private ministryService:MinistryService, private router:Router,private appComponent: AppComponent) {
    super();
  }


  ngOnInit(): void {
    sessionStorage.clear();
  }
  ministryUid:string;
  ministryPwd:string;
  ministryForm=new MinistryLogin();

  login(){
    //alert(JSON.stringify(this.login));
    this.ministryService.login(this.ministryForm).subscribe(data => {
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        sessionStorage.setItem('userType','ministry');
        this.appComponent.ngOnInit();
        sessionStorage.setItem('ministryUid',String(this.ministryForm.ministryUid));
        this.router.navigate(['ministryDashboard/profile']);
      }
      else {
        alert("ERROR");
      }
    })
  }


}
