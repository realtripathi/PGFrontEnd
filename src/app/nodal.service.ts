import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Institute } from './institute';
import { LoginStatus } from './login-status';
import { Nodal } from './nodal';
import { NodalLogin } from './nodal-login';
import { ScholarshipForm } from './scholarship-form';
import { Status } from './status';

@Injectable({
  providedIn: 'root'
})
export class NodalService {

  constructor(private http:HttpClient) { }


  login(login: NodalLogin): Observable<LoginStatus> {
    let url = 'http://localhost:8080/nodalLogin';
    return this.http.post<LoginStatus>(url, login);
  }

  showUnapprovedForms() {
    let url = 'http://localhost:8080/viewUnapprovedFormsByNodal';
    return this.http.get<ScholarshipForm[]>(url);
  }

  showUnapprovedInstitutes() {
    let url = 'http://localhost:8080/viewUnapprovedInstitutesByNodal';
    return this.http.get<Institute[]>(url);
  }

  viewProfile(nodalId: number): Observable<Nodal>{
    let url = 'http://localhost:8080/fetchNodalProfile?nodalUid='+nodalId;
    return this.http.get<Nodal>(url);
  }

  approveInstitute(Status: String,instituteId: number): Observable<Status>{
    let url = 'http://localhost:8080/nodalUpdateInstitute?instituteId='+instituteId+'&status='+Status;
    return this.http.post<Status>(url, Status);
  }

  rejectInstitute(Status: String,instituteId: number): Observable<Status>{
    let url = 'http://localhost:8080/nodalUpdateInstitute?instituteId='+instituteId+'&status='+Status;
    return this.http.post<Status>(url, Status);
  }

  approveForm(Status: String,formId:number): Observable<Status>{
    let url = 'http://localhost:8080/nodalUpdateForm?formId='+formId+'&status='+Status;
    return this.http.post<Status>(url, Status);
  }

  rejectForm(Status: String,formId:number): Observable<Status>{
    let url = 'http://localhost:8080/nodalUpdateForm?formId='+formId+'&status='+Status;;
    return this.http.post<Status>(url, Status);
  }

  
}
