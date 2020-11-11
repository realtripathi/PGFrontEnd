import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ministry-profile',
  templateUrl: './ministry-profile.component.html',
  styleUrls: ['./ministry-profile.component.css']
})
export class MinistryProfileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("userType")=='ministry' && sessionStorage.getItem("ministryId")!=null){
      this.router.navigate(['ministryDashboard/profile']);
    }else{
      sessionStorage.clear();
      this.router.navigate(['ministryLogin']);
    }
  }
}
