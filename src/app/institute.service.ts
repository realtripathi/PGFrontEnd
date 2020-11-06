import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Institute } from "./institute";
import { Observable } from 'rxjs';
import { Status } from "./status";
import { LoginStatus } from "./login-status"
import { InstituteLogin } from './institute-login';

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
  
}
