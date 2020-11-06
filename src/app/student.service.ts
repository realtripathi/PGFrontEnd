import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginStatus } from './login-status';
import { Status } from './status';
import { Student } from './student';
import { StudentLogin } from './student-login';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  register(student:Student): Observable<Status> {
    let url = 'http://localhost:8080/registerStudent';
    return this.http.post<Status>(url, student);
  }

  login(login: StudentLogin): Observable<LoginStatus> {
    let url = 'http://localhost:8080/studentLogin';
    return this.http.post<LoginStatus>(url, login);
  }
}
