import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstituteService } from '../institute.service';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-institute-student-verify',
  templateUrl: './institute-student-verify.component.html',
  styleUrls: ['./institute-student-verify.component.css']
})
export class InstituteStudentVerifyComponent implements OnInit {

  constructor(private route: ActivatedRoute,private studentService: StudentService, private instituteService: InstituteService) { }

  public studentId;
  studentModel= new Student();

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.studentId = id;
    this.studentService.showProfile(this.studentId).subscribe(data => this.studentModel = data);
  }

  approveStudent(){
    this.instituteService.approveStudent("APPROVE").subscribe()
  }

  rejectStudent(){
    this.instituteService.rejectStudent("REJECT").subscribe()
  }

}
