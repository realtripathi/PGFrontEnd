import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ministry-dash',
  templateUrl: './ministry-dash.component.html',
  styleUrls: ['./ministry-dash.component.css']
})
export class MinistryDashComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("userType")=='ministry' && sessionStorage.getItem("ministryId")!=null){
      this.router.navigate(['ministryDashboard/profile']);
    }else{
      sessionStorage.clear();
      this.router.navigate(['ministryLogin']);
    }
  }

  viewProfile(){
    this.router.navigate(['profile'],{relativeTo: this.route});
  }

  newNodalRegistration(){
    this.router.navigate(['freshNodal'],{relativeTo: this.route});
  }

  newSchemeRegister(){
    this.router.navigate(['freshScheme'],{relativeTo: this.route});
  }

  formVerification(){
    this.router.navigate(['formVerification'],{relativeTo: this.route});
  }

  viewInstitute(){
    this.router.navigate(['formInstitute'],{relativeTo: this.route});
  }

  viewNodal(){
    this.router.navigate(['viewNodalOfficers'],{relativeTo: this.route});
  }

}
