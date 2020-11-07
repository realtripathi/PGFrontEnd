import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from './status';
import { Nodal } from './nodal';


@Injectable({
  providedIn: 'root'
})
export class MinistryService {

  constructor(private http:HttpClient) { }

  registerNodal(nodal: Nodal): Observable<Status> {
    let url = 'http://localhost:8080/registerNodal';
    return this.http.post<Status>(url, nodal);
  }
}
