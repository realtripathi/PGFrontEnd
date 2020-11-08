import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  studentId: any;
  studentModel= new Student();

  constructor(private studentService: StudentService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { 
    this.studentId = sessionStorage.getItem('studentId');
  }

  ngOnInit(): void {
    this.studentService.showProfile(this.studentId).subscribe(data => this.studentModel = data);
  }

  scheme:any[]=[
    {schemeId:"1001", name:"Merit-cum-Means based", details:"The Maharashtra DTE Scholarship gives the opportunity to the students belonging to the backwards categories to study in the government and private colleges after completion of their Class 12th."},
    {schemeId:"1002",name:"PRAGATI SCHOLARSHIP ", details:"‘One Girl’ per family and it can be extended for Two Girl Child per family where the family income is less than Rs. 8 Lakh /annum (In case of married girl child, the income of parents/ in laws whichever is higher is to be considered)."},
    {schemeId:"1003",name:"NTSE (National Talent Search Examination)", details:"Candidates must be an Indian national"},
  ];

  selectedItem:any;
  onSelect(i:any):void{
    this.selectedItem = i;
    //console.log(`aaaa=${JSON.stringify(this.selectedItem)}`);
  }

  onApply():void{
    this.router.navigate(['/studentDashboard/applyScheme']);
  }
}
