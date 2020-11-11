import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MinistryService} from '../ministry.service'
import { Nodal } from '../nodal';
import { NodalService } from '../nodal.service' ;


@Component({
  selector: 'app-ministry-nodal-verify',
  templateUrl: './ministry-nodal-verify.component.html',
  styleUrls: ['./ministry-nodal-verify.component.css']
})
export class MinistryNodalVerifyComponent implements OnInit {

  constructor(private route: ActivatedRoute, private nodalService:NodalService,private ministryService:MinistryService, private router: Router) { }

  public nodalUid;
  nodalModel=new Nodal();

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.nodalUid = id;
    this.nodalService.showProfile(this.nodalUid).subscribe(data => this.nodalModel = data);
  }

  approveNodal(){
    this.ministryService.approveNodal("Approved",this.nodalUid).subscribe();
    this.router.navigate(['ministryDashboard/viewNodalOfficers']);
  }

  rejectNodal(){
    this.ministryService.rejectNodal("Rejected",this.nodalUid).subscribe();
    this.router.navigate(['ministryDashboard/viewNodalOfficers']);
  }



}
