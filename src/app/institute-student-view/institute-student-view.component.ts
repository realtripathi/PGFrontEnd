import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstituteService } from '../institute.service';
import { Student } from '../student';

@Component({
  selector: 'app-institute-student-view',
  templateUrl: './institute-student-view.component.html',
  styleUrls: ['./institute-student-view.component.css']
})
export class InstituteStudentViewComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private instituteService: InstituteService) { }

  public unaprrovedStudents: Student[]

  instituteId: any;

  ngOnInit(): void {
    this.instituteId = sessionStorage.getItem('instituteId');
    this.instituteService.showUnapprovedStudents(this.instituteId).subscribe(data => this.unaprrovedStudents = data);
  }

  public viewStudentDetails(){
    this.route.navigate(['studentDetails'],{relativeTo: this.router});
  }

}
