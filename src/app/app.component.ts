
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {

  constructor(){
    this.studentId = sessionStorage.getItem('studentId');
    this.instituteId = sessionStorage.getItem('instituteId');
    this.nodalId = sessionStorage.getItem('nodalId');
    this.ministryId = sessionStorage.getItem('ministryId');
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.checkSession
  }

  loggedIn = false;

  ngOnInit(): void {
    this.checkSession();
  }

  title = 'PG2';

  studentId: any;
  instituteId: any;
  nodalId: any;
  ministryId: any;

  checkSession(){
    if(this.studentId!=null || this.instituteId!=null || this.nodalId!=null || this.ministryId!=null){
      this.loggedIn=true;
    }
  }

  clearSession(){
    sessionStorage.clear();
    this.loggedIn = false;
  }

}
