import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MinistryService } from '../ministry.service';
import { SchemeService } from '../scheme.service';
import { ScholarshipForm } from '../scholarship-form';

@Component({
  selector: 'app-ministry-form-verify',
  templateUrl: './ministry-form-verify.component.html',
  styleUrls: ['./ministry-form-verify.component.css']
})
export class MinistryFormVerifyComponent implements OnInit {

  constructor(private route: ActivatedRoute,private schemeService : SchemeService, private ministryService: MinistryService,private router:Router) { }

  public formId;
  formModel = new ScholarshipForm();

  ngOnInit(): void {
    if(sessionStorage.getItem('userType')=="ministry" && sessionStorage.getItem('ministryId')!=null){
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.formId = id;
    this.schemeService.showForm(this.formId).subscribe(data => this.formModel = data);
    }
    else{
      sessionStorage.clear();
      this.router.navigate(['ministryLogin']);
    }
  }

  approveForm(){
    this.ministryService.approveForm("Approved",this.formId).subscribe();
    this.router.navigate(['ministryDashboard/formVerification']);
  }

  rejectForm(){
    this.ministryService.rejectForm("Rejected",this.formId).subscribe();
    this.router.navigate(['ministryDashboard/formVerification']);
  }

}
