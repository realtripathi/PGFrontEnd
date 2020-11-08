import { StudentLogin } from './../student-login';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit(): void {
  }

  studentLogin = new StudentLogin();

  login(){
    //alert(JSON.stringify(this.login));
    this.studentService.login(this.studentLogin).subscribe(data => {
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        this.router.navigate(['studentDashboard/profile']);
        sessionStorage.setItem('studentId', String(this.studentLogin.studentId));
      }
      else {
        alert("ERROR");
      }
    })
  }

}
