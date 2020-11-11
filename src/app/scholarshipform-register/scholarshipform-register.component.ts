import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ScholarshipForm } from "../scholarship-form";
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-scholarshipform-register',
  templateUrl: './scholarshipform-register.component.html',
  styleUrls: ['./scholarshipform-register.component.css']
})
export class ScholarshipformRegisterComponent implements OnInit {

  scholarshipFormModel = new ScholarshipForm();
  constructor(private studentService: StudentService,
    private router: Router) {
    this.studentId = sessionStorage.getItem('studentId');
  }

  formExits = true;
  genderNotMatch=true;

  ngOnInit(): void {
    this.studentService.showProfile(this.studentId).subscribe(data => this.studentModel = data);
    
    
  }

  studentId: any;
  studentModel = new Student();

  schemes: any[] = [
    { schemeId: "1001", name: "Merit-cum-Means based", details: " ELIGIBILTY CRITERIA: The Maharashtra DTE Scholarship gives the opportunity to the students belonging to the backwards categories to study in the government and private colleges after completion of their Class 12th. The candidates applying for the Maharashtra Merit cum Means Scholarship must have completed 10th and 12th from a recognized board with a minimum of 60% marks in aggregate. The applicant must produce all the documents prescribed by the state." },
    { schemeId: "1002", name: "PRAGATI SCHOLARSHIP ", details: "ELIGIBILITY CRITERIA: The scholarship is applicable to One Girl per family and it can be extended for Two Girl Child per family where the family income is less than Rs. 8 Lakh /annum (In case of married girl child, the income of parents/ in laws whichever is higher is to be considered).  Amount of scholarship: Tuition Fee of Rs. 30,000/-. " },
    { schemeId: "1003", name: "NTSE (National Talent Search Examination)", details: " ELIGIBILITY CRITERIA: Candidate must be an Indian citizen. A minimum of 60% marks Class IX is required. SC, ST and PH candidates will need 55% marks in Class IX. Candidate must be studying in a recognized school in their respective State. " },
  ];

  scheme: any;
  onSelect(i: any) {
    this.scheme = i;
    if(this.studentModel.form == null && this.studentModel.studentStatus === "Approved"){
      this.formExits =false;
    }
    //console.log(`aaaa=${JSON.stringify(this.selectedItem)}`);
  }

  onApply(schemeId: number) {
    this.router.navigate(['/studentDashboard/applyScheme', schemeId]);
  }

}
