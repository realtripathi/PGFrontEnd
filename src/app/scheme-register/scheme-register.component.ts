import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Scheme } from "../scheme";
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-scheme-register',
  templateUrl: './scheme-register.component.html',
  styleUrls: ['./scheme-register.component.css']
})
export class SchemeRegisterComponent implements OnInit {

  schemeModel=new Scheme();
  scheme_Gender=['Female','Male','Other'];
  scheme_for_Disabled=['Yes','No'];
  scheme_caste=['SC', 'ST','OBC','EWS', 'GENERAL'];

  schemeCasteInvalid=true;
  schemeGenderInvalid=true;
  schemeDisabilityInvalid=true;

  constructor(private schemeService: SchemeService, private router:Router) { }

  ngOnInit(): void {
  }

  register() {
    //console.log(this.schemeModel);
    this.schemeService.register(this.schemeModel).subscribe(data => {
     //alert(JSON.stringify(data));
     if(data.status == 'SUCCESS') {
       this.router.navigate(['ministryDashboard']);
     }
     else {
       //this.router.navigate(['error']);
     }
   })
   }

   validateschemeCaste(value){
    if(value == ''){
      this.schemeCasteInvalid = true;
    }
    else{
      this.schemeCasteInvalid = false;
    }
  }

  validateschemeGender(value){
    if(value == ''){
      this.schemeGenderInvalid = true;
    }
    else{
      this.schemeGenderInvalid = false;
    }
  }

  validateschemeDisabled(value){
    if(value == ''){
      this.schemeDisabilityInvalid = true;
    }
    else{
      this.schemeDisabilityInvalid = false;
    }
  }
}
