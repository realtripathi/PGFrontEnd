import { Component, OnInit } from '@angular/core';
import { ScholarshipForm } from "../scholarship-form";

@Component({
  selector: 'app-scholarshipform-register',
  templateUrl: './scholarshipform-register.component.html',
  styleUrls: ['./scholarshipform-register.component.css']
})
export class ScholarshipformRegisterComponent implements OnInit {

  scholarshipFormModel=new ScholarshipForm();
  constructor() { }

  ngOnInit(): void {
  }

}
