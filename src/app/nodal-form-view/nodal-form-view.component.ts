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

  ngOnInit(): void {
    this.nodalService.showUnapprovedForms().subscribe(data => this.unapprovedForms = data);
  }

  viewFormDetails(unapprovedForm){
    this.route.navigate(['formDetails',unapprovedForm.formId],{relativeTo: this.router});
  }

}
