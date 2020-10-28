import { StudentLogin } from './../student-login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  studentLogin = new StudentLogin(null,null);

}
