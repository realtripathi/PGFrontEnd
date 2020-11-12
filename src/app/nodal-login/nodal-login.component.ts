import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { NodalLogin } from "../nodal-login";
import { NodalService } from '../nodal.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-nodal-login',
  templateUrl: './nodal-login.component.html',
  styleUrls: ['./nodal-login.component.css']
})
export class NodalLoginComponent extends AppComponent implements OnInit {

  constructor(private nodalService:NodalService, private router:Router, private appComponent: AppComponent) {
    super();
  }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  nodalForm=new NodalLogin();

  login(){
    //alert(JSON.stringify(this.login));
    this.nodalService.login(this.nodalForm).subscribe(data => {
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        sessionStorage.setItem('userType','nodal');
        this.appComponent.ngOnInit();
        sessionStorage.setItem('nodalId',String(this.nodalForm.nodalId));
        this.router.navigate(['nodalDashboard/profile']);
      }
      else {
        swal(data.message);
      }
    })
  }

}
