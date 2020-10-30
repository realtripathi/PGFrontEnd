import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nodal-dash',
  templateUrl: './nodal-dash.component.html',
  styleUrls: ['./nodal-dash.component.css']
})
export class NodalDashComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  viewProfile(){
    this.router.navigate(['profile'],{relativeTo: this.route});
  }

  formVerification(){
    this.router.navigate(['formVerification'],{relativeTo: this.route});
  }

  instituteVerification(){
    this.router.navigate(['instituteVerification'],{relativeTo: this.route});
  }

}
