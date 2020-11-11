import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Institute } from '../institute';
import { NodalService } from '../nodal.service';

@Component({
  selector: 'app-nodal-institute-view',
  templateUrl: './nodal-institute-view.component.html',
  styleUrls: ['./nodal-institute-view.component.css']
})
export class NodalInstituteViewComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private nodalService: NodalService) { }

  public unapprovedInstitutes: Institute[];


  nodalId: any;

  ngOnInit(): void {
    if(sessionStorage.getItem('userType')=="nodal" && sessionStorage.getItem('nodalId')!=null){
    this.nodalId = sessionStorage.getItem('nodalId');
    this.nodalService.showUnapprovedInstitutes().subscribe(data => this.unapprovedInstitutes = data)
    }
    else{
      sessionStorage.clear();
      this.route.navigate(['nodalLogin']);
    }
  }

  viewInstituteDetails(unapprovedInstitute){
    this.route.navigate(['instituteDetails',unapprovedInstitute.instituteId],{relativeTo: this.router});
  }

}
