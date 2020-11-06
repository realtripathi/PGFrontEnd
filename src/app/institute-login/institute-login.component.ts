import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstituteLogin } from "../institute-login";
import { InstituteService } from '../institute.service';

@Component({
  selector: 'app-institute-login',
  templateUrl: './institute-login.component.html',
  styleUrls: ['./institute-login.component.css']
})
export class InstituteLoginComponent implements OnInit {


  instituteLogin = new InstituteLogin();

  constructor(private instituteService : InstituteService, private router : Router) { }

  ngOnInit(): void {

  }

  login(){
    alert(JSON.stringify(this.login));
    this.instituteService.login(this.instituteLogin).subscribe(data => {
      alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        this.router.navigate(['instituteDashboard']);
      }
      else {
        alert("EORROR");
      }
    })
  }

}
