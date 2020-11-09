import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scheme } from './scheme';
import { ScholarshipForm } from './scholarship-form';
import { Status } from "./Status";

@Injectable({
  providedIn: 'root'
})
export class SchemeService {

  constructor(private http:HttpClient) { }

  register(scheme: Scheme): Observable<Status> {
    let url = 'http://localhost:8080/addScheme';
    return this.http.post<Status>(url, scheme);
  }

  showForm(formId: number): Observable<ScholarshipForm>{
    let url = '';
    return this.http.get<ScholarshipForm>(url);
  }

}
