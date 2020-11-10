
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {

  }

  loggedIn = false;
  student = false;
  institute = false;
  nodal = false;
  ministry = false;

  ngOnInit(): void {
    this.userType = sessionStorage.getItem('userType');
    this.checkSession();
  }

  title = 'PG2';

  userType: String;

  checkSession() {
    if (this.userType != null) {
      if (this.userType == "student") {
        this.loggedIn = true;
        this.student = true;
        this.institute = false;
        this.nodal = false;
        this.ministry = false;
      }
      if (this.userType == "institute") {
        this.loggedIn = true;
        this.student = false;
        this.institute = true;
        this.nodal = false;
        this.ministry = false;
      }
      if (this.userType == "nodal") {
        this.loggedIn = true;
        this.student = false;
        this.institute = false;
        this.nodal = true;
        this.ministry = false;
      }
      if (this.userType == "ministry") {
        this.loggedIn = true;
        this.student = true;
        this.institute = false;
        this.nodal = false;
        this.ministry = true;
      }
    }
  }

  clearSession() {
    sessionStorage.clear();
    this.loggedIn = false;
    this.student = false;
    this.institute = false;
    this.nodal = false;
    this.ministry = false;
  }

}
