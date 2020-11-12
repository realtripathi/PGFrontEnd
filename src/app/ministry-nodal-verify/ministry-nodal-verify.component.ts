import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MinistryService } from '../ministry.service'
import { Nodal } from '../nodal';
import { NodalService } from '../nodal.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-ministry-nodal-verify',
  templateUrl: './ministry-nodal-verify.component.html',
  styleUrls: ['./ministry-nodal-verify.component.css']
})
export class MinistryNodalVerifyComponent implements OnInit {

  constructor(private route: ActivatedRoute, private nodalService: NodalService, private ministryService: MinistryService, private router: Router) { }

  public nodalUid;
  nodalModel = new Nodal();

  ngOnInit(): void {
    if (sessionStorage.getItem('userType') == "ministry" && sessionStorage.getItem('ministryId') != null) {
      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.nodalUid = id;
      this.nodalService.showProfile(this.nodalUid).subscribe(data => this.nodalModel = data);
    }
    else {
      sessionStorage.clear();
      this.router.navigate(['ministryLogin']);
    }
  }

  approveNodal() {
    this.ministryService.approveNodal("Approved", this.nodalUid).subscribe();
    swal("approve nodal");
    this.router.navigate(['ministryDashboard/viewNodalOfficers']);
  }

  rejectNodal() {
    this.ministryService.rejectNodal("Rejected", this.nodalUid).subscribe();
    this.router.navigate(['ministryDashboard/viewNodalOfficers']);
  }



}
