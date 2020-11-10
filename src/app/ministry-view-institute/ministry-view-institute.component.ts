import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Institute } from '../institute';
import { MinistryService } from '../ministry.service';

@Component({
  selector: 'app-ministry-view-institute',
  templateUrl: './ministry-view-institute.component.html',
  styleUrls: ['./ministry-view-institute.component.css']
})
export class MinistryViewInstituteComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private ministryService: MinistryService) { }

  public unapprovedInstitutes: Institute[];

  ministryId: any;

  ngOnInit(): void {
    this.ministryId = sessionStorage.getItem('ministryId');
    this.ministryService.showUnapprovedInstitutes().subscribe(data => this.unapprovedInstitutes = data)
  }

  viewInstituteDetails(unapprovedInstitute){
    this.route.navigate(['instituteDetails',unapprovedInstitute.instituteId],{relativeTo: this.router});
  }

}
