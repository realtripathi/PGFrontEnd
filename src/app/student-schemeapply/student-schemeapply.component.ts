import { Component, OnInit } from '@angular/core';
import { ScholarshipForm } from "../scholarship-form";

@Component({
  selector: 'app-student-schemeapply',
  templateUrl: './student-schemeapply.component.html',
  styleUrls: ['./student-schemeapply.component.css']
})
export class StudentSchemeapplyComponent implements OnInit {


  scholarshipFormModel=new ScholarshipForm(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,false);
  

  constructor() { }

  ngOnInit(): void {
  }

}
