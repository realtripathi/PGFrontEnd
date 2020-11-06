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
  constructor(private schemeService: SchemeService, private router:Router) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.schemeModel);
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

}
