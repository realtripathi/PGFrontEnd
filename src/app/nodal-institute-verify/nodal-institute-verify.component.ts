import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Institute } from '../institute';
import { InstituteService } from '../institute.service';
import { NodalService } from '../nodal.service';
import { SchemeService } from '../scheme.service';

@Component({
  selector: 'app-nodal-institute-verify',
  templateUrl: './nodal-institute-verify.component.html',
  styleUrls: ['./nodal-institute-verify.component.css']
})
export class NodalInstituteVerifyComponent implements OnInit {

  constructor(private route: ActivatedRoute, private instituteService: InstituteService, private nodalService: NodalService, private router: Router) { }

  public instituteId: number;
  instituteModel = new Institute();

  ngOnInit(): void {
    if(sessionStorage.getItem('userType')=="nodal" && sessionStorage.getItem('nodalId')!=null){
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.instituteId = id;
    this.instituteService.viewProfile(this.instituteId).subscribe(data => this.instituteModel = data);
    //alert(JSON.stringify(this.instituteModel));
  }
  else{
    sessionStorage.clear();
    this.router.navigate(['nodalLogin']);
  }
  }

  approveInstitute() {
    this.nodalService.approveInstitute("Approved", this.instituteId).subscribe();
    this.router.navigate(['nodalDashboard/instituteVerification']);
  }

  rejectInstitute() {
    this.nodalService.rejectInstitute("Rejected", this.instituteId).subscribe();
    this.router.navigate(['nodalDashboard/instituteVerification']);
  }


}

