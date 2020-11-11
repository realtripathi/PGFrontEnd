import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from './status';
import { Nodal } from './nodal';
import { Institute } from './institute';
import { ScholarshipForm } from './scholarship-form';
import { MinistryLogin } from './ministry-login';
import { LoginStatus } from './login-status';


@Injectable({
  providedIn: 'root'
})
export class MinistryService {

  constructor(private http:HttpClient) { }

  registerNodal(nodal: Nodal): Observable<Status> {
    let url = 'http://localhost:8080/registerNodal';
    return this.http.post<Status>(url, nodal);
  }

  showUnapprovedInstitutes() {
    let url = 'http://localhost:8080/viewUnapprovedInstitutesByMinistry';
    return this.http.get<Institute[]>(url);
  }

  showNodals() {
    let url = 'http://localhost:8080/viewNodalList';
    return this.http.get<Nodal[]>(url);
  }

  showUnapprovedForms() {
    let url = 'http://localhost:8080/viewUnapprovedFormsByMinistry';
    return this.http.get<ScholarshipForm[]>(url);
  }

  approveForm(Status: String,formId:number): Observable<Status>{
    let url = 'http://localhost:8080/ministryUpdateForm?formId='+formId+'&status='+Status;
    return this.http.post<Status>(url, Status);
  }

  rejectForm(Status: String,formId:number): Observable<Status>{
    let url = 'http://localhost:8080/ministryUpdateForm?formId='+formId+'&status='+Status;;
    return this.http.post<Status>(url, Status);
  }

  approveInstitute(Status: String,instituteId: number): Observable<Status>{
    let url = 'http://localhost:8080/ministryUpdateInstitute?instituteId='+instituteId+'&status='+Status;
    return this.http.post<Status>(url, Status);
  }

  rejectInstitute(Status: String,instituteId: number): Observable<Status>{
    let url = 'http://localhost:8080/ministryUpdateInstitute?instituteId='+instituteId+'&status='+Status;
    return this.http.post<Status>(url, Status);
  }


  approveNodal(Status: String, nodalUid: number): Observable<Status>{
    let url = 'http://localhost:8080/ministryUpdateNodal?nodalId='+nodalUid+'&status='+Status;
    return this.http.post<Status>(url, Status);
  }

  rejectNodal(Status: String, nodalUid: number): Observable<Status>{
    let url = 'http://localhost:8080/ministryUpdateNodal?nodalId='+nodalUid+'&status='+Status;
    return this.http.post<Status>(url, Status);
  }
  login(login: MinistryLogin): Observable<LoginStatus> {
    let url = 'http://localhost:8080/ministryLogin';
    return this.http.post<LoginStatus>(url, login);
  }

  instituteForgotPassword(instituteId: number, email:String){                          
    let url='http://localhost:8080/instituteForgotPassword?instituteId='+instituteId+'&email='+email;
    return this.http.get(url);
  }

 studentForgotPassword(studentId: number, email:String){
    let url='http://localhost:8080/studentForgotPassword?studentId='+studentId+'&email='+email;
    return this.http.get(url);
  }

 viewInstitutesByMinistryStatus(status:string) {
    let url = 'http://localhost:8080/viewInstitutesByMinistryStatus?status='+status;
    return this.http.get<Institute[]>(url);
  }

  viewFormsByMinistryStatus(status:string) {
    let url = 'http://localhost:8080/viewFormsByMinistryStatus?status='+status;
    return this.http.get<ScholarshipForm[]>(url);
  }
}
