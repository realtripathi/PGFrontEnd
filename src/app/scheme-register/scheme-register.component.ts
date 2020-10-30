import { Component, OnInit } from '@angular/core';
import { Scheme } from "../scheme";

@Component({
  selector: 'app-scheme-register',
  templateUrl: './scheme-register.component.html',
  styleUrls: ['./scheme-register.component.css']
})
export class SchemeRegisterComponent implements OnInit {

  schemeModel=new Scheme(null,null,null,null,null,null,null,null,null,null,null,true);
  constructor() { }

  ngOnInit(): void {
  }

}
