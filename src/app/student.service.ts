import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginStatus } from './login-status';
import { ScholarshipForm } from './scholarship-form';
import { Status } from './status';
import { Student } from './student';
import { StudentLogin } from './student-login';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  register(student: Student, instiute_id: Number): Observable<Status> {
    let url = 'http://localhost:8080/registerStudent?institute_id=' + instiute_id;
    return this.http.post<Status>(url, student);
  }

  login(login: StudentLogin): Observable<LoginStatus> {
    let url = 'http://localhost:8080/studentLogin';
    return this.http.post<LoginStatus>(url, login);
  }

  formId: Number;

  fetchformId(studentId: Number): Observable<Number>{
    let url = 'http://localhost:8080/findFormByStudentId?studentId='+studentId;
    return this.http.get<Number>(url);
  }

  fetchInstituteId(studentId: Number): Observable<Number>{
    let url = 'http://localhost:8080/getInstituteId?studentId='+studentId;
    return this.http.get<Number>(url);
  }

  uploadDocument(formData: FormData){
    let url = 'http://localhost:8080/docs-upload'
    return this.http.post(url, formData);
  }

  applyScheme(form : ScholarshipForm, instituteId: String, schemeId: Number, studentId: Number) {

    // let params = new HttpParams()
    //   .set('intituteId', instituteId)
    //   .set('schemeId', schemeId)
    //   .set('studentId', studentId);
    let url1 = 'http://localhost:8080/applyForScheme?instituteId=' + instituteId + '&schemeId=' + schemeId +'&studentId=' +studentId;
    return this.http.post<Status>(url1, form);

  }

  showProfile(studentId: number): Observable<Student>{
    let url = 'http://localhost:8080/fetchStudentProfile?studentId='+studentId;
    return this.http.get<Student>(url);
  }

}
