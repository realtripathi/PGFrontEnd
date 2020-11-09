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

  approveForm(Status: String,formId:number): Observable<Status>{
    let url = 'http://localhost:8080/ministryUpdateForm?formId='+formId+'&status='+Status;
    return this.http.post<Status>(url, Status);
  }

  rejectForm(Status: String,formId:number): Observable<Status>{
    let url = 'http://localhost:8080/ministryUpdateForm?formId='+formId+'&status='+Status;;
    return this.http.post<Status>(url, Status);
  }

  approveInstitute(Status: String,instituteId: number): Observable<Status>{
    let url = 'http://localhost:8080/ministryUpdateInstitute?instituteId='+instituteId+'&status='+Status;
    return this.http.post<Status>(url, Status);
  }

  rejectInstitute(Status: String,instituteId: number): Observable<Status>{
    let url = 'http://localhost:8080/ministryUpdateInstitute?instituteId='+instituteId+'&status='+Status;
    return this.http.post<Status>(url, Status);
  }
}
