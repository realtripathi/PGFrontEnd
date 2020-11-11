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
  public approvedInstitutes: Institute[];
  public rejectedInstitutes: Institute[];

  ministryId: any;

  ngOnInit(): void {
    if(sessionStorage.getItem('userType')=="ministry" && sessionStorage.getItem('ministryId')!=null){
    this.ministryId = sessionStorage.getItem('ministryId');
    //this.ministryService.showUnapprovedInstitutes().subscribe(data => this.unapprovedInstitutes = data);
    this.ministryService.viewInstitutesByMinistryStatus("Not Approved").subscribe(data => this.unapprovedInstitutes = data);
    this.ministryService.viewInstitutesByMinistryStatus("Approved").subscribe(data => this.approvedInstitutes = data);
    this.ministryService.viewInstitutesByMinistryStatus("Rejected").subscribe(data => this.rejectedInstitutes = data);
    }
    else{
      sessionStorage.clear();
      this.route.navigate(['ministryLogin']);
    }
  }

  viewInstituteDetails(unapprovedInstitute){
    this.route.navigate(['instituteDetails',unapprovedInstitute.instituteId],{relativeTo: this.router});
  }

}
