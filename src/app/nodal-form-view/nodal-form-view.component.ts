import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NodalService } from '../nodal.service';
import { ScholarshipForm } from '../scholarship-form';

@Component({
  selector: 'app-nodal-form-view',
  templateUrl: './nodal-form-view.component.html',
  styleUrls: ['./nodal-form-view.component.css']
})
export class NodalFormViewComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private nodalService: NodalService) { }

  public unapprovedForms: ScholarshipForm[];
  public approvedForms: ScholarshipForm[];
  public rejectedForms: ScholarshipForm[];

  ngOnInit(): void {
    if(sessionStorage.getItem('userType')=="nodal" && sessionStorage.getItem('nodalId')!=null){
    //this.nodalService.showUnapprovedForms().subscribe(data => this.unapprovedForms = data);
    this.nodalService.viewFormsByNodalStatus("Not Approved").subscribe(data => this.unapprovedForms = data);
    this.nodalService.viewFormsByNodalStatus("Approved").subscribe(data => this.approvedForms = data);
    this.nodalService.viewFormsByNodalStatus("Rejected").subscribe(data => this.rejectedForms = data);
  }
  else{
    sessionStorage.clear();
    this.route.navigate(['nodalLogin']);
  }
  }

  viewFormDetails(unapprovedForm){
    this.route.navigate(['formDetails',unapprovedForm.formId],{relativeTo: this.router});
  }

}
