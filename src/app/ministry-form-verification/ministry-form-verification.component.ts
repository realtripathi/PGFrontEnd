import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScholarshipForm } from '../scholarship-form';
import { MinistryService } from '../ministry.service';

@Component({
  selector: 'app-ministry-form-verification',
  templateUrl: './ministry-form-verification.component.html',
  styleUrls: ['./ministry-form-verification.component.css']
})
export class MinistryFormVerificationComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private ministryService: MinistryService) { }

  public unapprovedForms: ScholarshipForm[];

  ministryId: any;

  ngOnInit(): void {
    this.ministryId = sessionStorage.getItem('ministryId');
    this.ministryService.showUnapprovedForms().subscribe(data => this.unapprovedForms = data);
  }

  viewFormDetails(unapprovedForm){
    this.route.navigate(['formDetails',unapprovedForm.formId],{relativeTo: this.router});
  }
}
