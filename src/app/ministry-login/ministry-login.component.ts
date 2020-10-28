import { Component, OnInit } from '@angular/core';
import { MinistryLogin } from "../ministry-login";

@Component({
  selector: 'app-ministry-login',
  templateUrl: './ministry-login.component.html',
  styleUrls: ['./ministry-login.component.css']
})
export class MinistryLoginComponent implements OnInit {

ministryForm = new MinistryLogin(null,null);

  constructor() { }

  ngOnInit(): void {
  }

}
