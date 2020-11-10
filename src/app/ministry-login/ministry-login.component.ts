import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MinistryLogin } from "../ministry-login";

@Component({
  selector: 'app-ministry-login',
  templateUrl: './ministry-login.component.html',
  styleUrls: ['./ministry-login.component.css']
})
export class MinistryLoginComponent extends AppComponent implements OnInit {

ministryForm = new MinistryLogin(null,null);

  constructor(private appComponent: AppComponent) {
    super();
  }

  ngOnInit(): void {
    sessionStorage.clear();
  }

}
