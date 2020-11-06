import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scheme } from './scheme';
import { Status } from "./Status";

@Injectable({
  providedIn: 'root'
})
export class SchemeService {

  constructor(private http:HttpClient) { }

  register(scheme: Scheme): Observable<Status> {
    let url = 'http://localhost:8585/addScheme';
    return this.http.post<Status>(url, scheme);
  }
}
