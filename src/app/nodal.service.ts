import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginStatus } from './login-status';
import { NodalLogin } from './nodal-login';

@Injectable({
  providedIn: 'root'
})
export class NodalService {

  constructor(private http:HttpClient) { }
  login(login: NodalLogin): Observable<LoginStatus> {
    let url = 'http://localhost:8080/nodalLogin';
    return this.http.post<LoginStatus>(url, login);
  }
}
