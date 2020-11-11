import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nodal-profile',
  templateUrl: './nodal-profile.component.html',
  styleUrls: ['./nodal-profile.component.css']
})
export class NodalProfileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("userType")=='nodal' && sessionStorage.getItem("nodalId")!=null){
      this.router.navigate(['nodalDashboard/profile']);
    }else{
      sessionStorage.clear();
      this.router.navigate(['nodalLogin']);
    }
  }

}
