import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScholarshipForm } from "../scholarship-form";
import { StudentService } from '../student.service'

@Component({
  selector: 'app-student-schemeapply',
  templateUrl: './student-schemeapply.component.html',
  styleUrls: ['./student-schemeapply.component.css']
})
export class StudentSchemeapplyComponent implements OnInit {


  scholarshipFormModel=new ScholarshipForm();

  instituteId: number = 1006;


  schemeId: number =1002;
  

  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit(): void {
  }

  applyScheme(){
    console.log(this.scholarshipFormModel);
    this.studentService.applyScheme(this.scholarshipFormModel,this.instituteId,this.schemeId,this.scholarshipFormModel.aadharNumber).subscribe(data => {
     //alert(JSON.stringify(data));
     if(data.status == 'SUCCESS') {
       this.router.navigate(['studentProfile']);
     }
     else {
       //this.router.navigate(['error']);
     }
   })
  }

}
