import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-dash',
  templateUrl: './student-dash.component.html',
  styleUrls: ['./student-dash.component.css']
})
export class StudentDashComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
  }

  viewProfile(){
    this.router.navigate(['profile'],{relativeTo: this.route});
  }

  applyScheme(){
    this.router.navigate(['applyScheme'],{relativeTo: this.route});
  }

}
