import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Institute } from "./institute";
import { Observable } from 'rxjs';
import { Status } from "./status";
import { LoginStatus } from "./login-status"
import { InstituteLogin } from './institute-login';
import { Student } from './student';
import { ScholarshipForm } from './scholarship-form';
import { InstituteRegisterDto } from './instituteRegisterDto';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  constructor(private http: HttpClient) { }

  register(institute: Institute): Observable<Status> {
    let url = 'http://localhost:8080/registerInstitute';
    return this.http.post<Status>(url, institute);
  }

  login(login: InstituteLogin): Observable<LoginStatus> {
    let url = 'http://localhost:8080/instituteLogin';
    return this.http.post<LoginStatus>(url, login);
  } 

  showUnapprovedStudents(instituteId: Number) {
    let url = 'http://localhost:8080/viewUnapprovedStudents?instituteId='+instituteId;
    return this.http.get<Student[]>(url);
  }

  showUnapprovedForms(instituteId: Number) {
    let url = 'http://localhost:8080/viewUnapprovedFormsByInstitute?instituteId='+instituteId;
    return this.http.get<ScholarshipForm[]>(url);
  }

  viewProfile(instituteId: number): Observable<Institute>{
    let url = 'http://localhost:8080/fetchInstituteProfile?instituteId='+instituteId;
    return this.http.get<Institute>(url);
  }

  approveStudent(Status: String,studentId: number): Observable<Status>{
    let url = 'http://localhost:8080/instituteUpdatesStudent?studentId='+studentId+'&status='+Status;
    return this.http.post<Status>(url, Status);
  }

  rejectStudent(Status: String,studentId:number): Observable<Status>{
    let url = 'http://localhost:8080/instituteUpdatesStudent?studentId='+studentId+'&status='+Status;
    return this.http.post<Status>(url, Status);
  }

  approveForm(Status: String,formId:number): Observable<Status>{
    let url = 'http://localhost:8080/instituteUpdatesForm?formId='+formId+'&status='+Status;
    return this.http.post<Status>(url, Status);
  }

  rejectForm(Status: String,formId:number): Observable<Status>{
    let url = 'http://localhost:8080/instituteUpdatesForm?formId='+formId+'&status='+Status;
    return this.http.post<Status>(url, Status);
  }

  uploadInsDocument(formData: FormData){
    let url = 'http://localhost:8080/insDocUpload';
    return this.http.post(url, formData);
  }

  registerAndfetchInstituteId(institute: Institute):Observable<InstituteRegisterDto>{
    let url = 'http://localhost:8080/registerInstitute2';
    return this.http.post<InstituteRegisterDto>(url, institute);
  }

  viewStudentsByInstituteStatus(instituteId: Number, status:string) {
    let url = 'http://localhost:8080/viewStudentsByStatus?instituteId='+instituteId+"&status="+status;
    return this.http.get<Student[]>(url);
  }

  viewFormsByInstituteStatus(instituteId: Number, status: string) {
    let url = 'http://localhost:8080/viewFormsByInstituteStatus?instituteId='+instituteId+"&status="+status;
    return this.http.get<ScholarshipForm[]>(url);
  }
  
}
