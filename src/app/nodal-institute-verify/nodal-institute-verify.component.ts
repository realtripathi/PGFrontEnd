import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Institute } from '../institute';
import { NodalService } from '../nodal.service';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-nodal-institute-verify',
  templateUrl: './nodal-institute-verify.component.html',
  styleUrls: ['./nodal-institute-verify.component.css']
})
export class NodalInstituteVerifyComponent implements OnInit {

  constructor(private route: ActivatedRoute,private schemeService : SchemeService, private nodalService:NodalService) { }

  public instituteId:number;
  instituteModel=new Institute();

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.instituteId = id;
    this.schemeService.showInstitute(this.instituteId).subscribe(data => this.instituteModel = data);
  }

  approveInstitute(){
    this.nodalService.approveInstitute("Approved",this.instituteId).subscribe()
  }

  rejectInstitute(){
    this.nodalService.rejectInstitute("Rejected",this.instituteId).subscribe()
  }


}
