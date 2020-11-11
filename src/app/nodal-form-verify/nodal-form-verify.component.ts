import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NodalService } from '../nodal.service'
import { SchemeService } from '../scheme.service';
import { ScholarshipForm } from '../scholarship-form';

@Component({
  selector: 'app-nodal-form-verify',
  templateUrl: './nodal-form-verify.component.html',
  styleUrls: ['./nodal-form-verify.component.css']
})
export class NodalFormVerifyComponent implements OnInit {

  constructor(private route: ActivatedRoute, private schemeService: SchemeService, private nodalService: NodalService, private router: Router) { }

  public formId;
  formModel = new ScholarshipForm();

  ngOnInit(): void {
    if (sessionStorage.getItem('userType')=="nodal" && sessionStorage.getItem('nodalId')!=null) {
      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.formId = id;
      this.schemeService.showForm(this.formId).subscribe(data => this.formModel = data);
    }
    else{
      sessionStorage.clear();
      this.router.navigate(['nodalLogin']);
    }
  }

  approveForm() {
    this.nodalService.approveForm("Approved", this.formId).subscribe();
    this.router.navigate(['nodalDashboard/formVerification']);
  }

  rejectForm() {
    this.nodalService.rejectForm("Rejected", this.formId).subscribe();
    this.router.navigate(['nodalDashboard/formVerification']);
  }

}
