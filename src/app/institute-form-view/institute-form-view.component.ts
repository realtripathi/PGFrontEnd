import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstituteService } from '../institute.service';
import { ScholarshipForm } from '../scholarship-form';

@Component({
  selector: 'app-institute-form-view',
  templateUrl: './institute-form-view.component.html',
  styleUrls: ['./institute-form-view.component.css']
})
export class InstituteFormViewComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private instituteService: InstituteService) { }

  public unapprovedForms: ScholarshipForm[]

  instituteId: any;

  ngOnInit(): void {
    if(sessionStorage.getItem('userType')=="institute" && sessionStorage.getItem('instituteId')!=null){
    this.instituteId = sessionStorage.getItem('instituteId');
    this.instituteService.showUnapprovedForms(this.instituteId).subscribe(data => this.unapprovedForms = data);
    }
    else{
      sessionStorage.clear();
      this.route.navigate(['instituteLogin']);
    }
  }

  viewFormDetails(unapprovedForm){
    this.route.navigate(['formDetails',unapprovedForm.formId],{relativeTo: this.router});
  }

}
