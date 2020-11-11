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

  constructor(private router: ActivatedRoute, private route: Router, private instituteService: InstituteService) { }

  public unaprrovedStudents: Student[]
  public approvedStudents: Student[]
  public rejectedStudents: Student[]

  instituteId: any;

  ngOnInit(): void {
    if (sessionStorage.getItem('userType') == "institute" && sessionStorage.getItem('instituteId') != null) {
      this.instituteId = sessionStorage.getItem('instituteId');
      //this.instituteService.showUnapprovedStudents(this.instituteId).subscribe(data => this.unaprrovedStudents = data);
      this.instituteService.viewStudentsByInstituteStatus(this.instituteId,"Not Approved").subscribe(data => this.unaprrovedStudents = data);
    this.instituteService.viewStudentsByInstituteStatus(this.instituteId,"Approved").subscribe(data => this.approvedStudents = data);
    this.instituteService.viewStudentsByInstituteStatus(this.instituteId,"Rejected").subscribe(data => this.rejectedStudents = data);
    }
    else {
      sessionStorage.clear();
      this.route.navigate(['instituteLogin']);
    }
  }

  viewStudentDetails(unaprrovedStudent) {
    this.route.navigate(['studentDetails', unaprrovedStudent.studentAadharNumber], { relativeTo: this.router });
  }

}
