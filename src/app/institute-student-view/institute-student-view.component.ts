import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-institute-student-view',
  templateUrl: './institute-student-view.component.html',
  styleUrls: ['./institute-student-view.component.css']
})
export class InstituteStudentViewComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
  }

  public viewStudentDetails(){
    this.route.navigate(['studentDetails'],{relativeTo: this.router});
  }

}
