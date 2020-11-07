import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  applyScheme(form : ScholarshipForm, instituteId: Number, schemeId: Number, studentId: Number) {

    // let params = new HttpParams()
    //   .set('intituteId', instituteId)
    //   .set('schemeId', schemeId)
    //   .set('studentId', studentId);
    let url = 'http://localhost:8080/applyForScheme?instituteId=' + instituteId + '&schemeId=' + schemeId +'&studentId=' +studentId;
    return this.http.post<Status>(url, form);
  }
}
