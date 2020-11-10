import { StudentLogin } from './../student-login';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent extends AppComponent implements OnInit {

  constructor(private studentService:StudentService,private router:Router, private appComponent: AppComponent) {
    super();
  }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  studentLogin = new StudentLogin();

  login(){
    //alert(JSON.stringify(this.login));
    this.studentService.login(this.studentLogin).subscribe(data => {
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        sessionStorage.setItem('userType','student');
        this.appComponent.ngOnInit();
        sessionStorage.setItem('studentId', String(this.studentLogin.studentId));
        this.router.navigate(['studentDashboard/profile']);
      }
      else {
        alert("ERROR");
      }
    })
  }

}
