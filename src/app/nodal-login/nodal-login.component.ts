import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NodalLogin } from "../nodal-login";
import { NodalService } from '../nodal.service';

@Component({
  selector: 'app-nodal-login',
  templateUrl: './nodal-login.component.html',
  styleUrls: ['./nodal-login.component.css']
})
export class NodalLoginComponent implements OnInit {

  nodalForm=new NodalLogin();
  constructor(private nodalService:NodalService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    alert(JSON.stringify(this.login));
    this.nodalService.login(this.nodalForm).subscribe(data => {
      alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        this.router.navigate(['nodalDashboard']);
      }
      else {
        alert("EORROR");
      }
    })
  }

}
