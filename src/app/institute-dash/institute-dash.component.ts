import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institute-dash',
  templateUrl: './institute-dash.component.html',
  styleUrls: ['./institute-dash.component.css']
})
export class InstituteDashComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("userType")=='institute' && sessionStorage.getItem("instituteId")!=null){
      this.router.navigate(['instituteDashboard/profile']);
    }else{
      sessionStorage.clear();
      this.router.navigate(['instituteLogin']);
    }
  }

  viewProfile(){
    this.router.navigate(['profile'],{relativeTo:this.route})
  }

  formVerification(){
    this.router.navigate(['formVerification'],{relativeTo:this.route})
  }

  studentVerification(){
    this.router.navigate(['studentVerification'],{relativeTo:this.route})
  }

}
