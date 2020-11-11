import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Institute } from '../institute';
import { InstituteService } from '../institute.service';
import { MinistryService } from '../ministry.service';

@Component({
  selector: 'app-ministry-institute-verify',
  templateUrl: './ministry-institute-verify.component.html',
  styleUrls: ['./ministry-institute-verify.component.css']
})
export class MinistryInstituteVerifyComponent implements OnInit {

  constructor(private route: ActivatedRoute,private instituteService : InstituteService, private ministryService:MinistryService, private router: Router) { }

  public instituteId:number;
  instituteModel=new Institute();

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.instituteId = id;
    this.instituteService.viewProfile(this.instituteId).subscribe(data => this.instituteModel = data);
  }

  approveInstitute(){
    this.ministryService.approveInstitute("Approved",this.instituteId).subscribe();
    this.router.navigate(['ministryDashboard/formInstitute']);

  }

  rejectInstitute(){
    this.ministryService.rejectInstitute("Rejected",this.instituteId).subscribe();
    this.router.navigate(['ministryDashboard/formInstitute']);
  }

}
