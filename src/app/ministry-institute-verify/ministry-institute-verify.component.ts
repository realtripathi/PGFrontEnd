import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Institute } from '../institute';
import { MinistryService } from '../ministry.service';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-ministry-institute-verify',
  templateUrl: './ministry-institute-verify.component.html',
  styleUrls: ['./ministry-institute-verify.component.css']
})
export class MinistryInstituteVerifyComponent implements OnInit {

  constructor(private route: ActivatedRoute,private schemeService : SchemeService, private ministryService:MinistryService) { }

  public instituteId:number;
  instituteModel=new Institute();

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.instituteId = id;
    this.schemeService.showInstitute(this.instituteId).subscribe(data => this.instituteModel = data);
  }

  approveInstitute(){
    this.ministryService.approveInstitute("Approved",this.instituteId).subscribe()
  }

  rejectInstitute(){
    this.ministryService.rejectInstitute("Rejected",this.instituteId).subscribe()
  }

}
