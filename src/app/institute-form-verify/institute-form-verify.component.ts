import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstituteService } from '../institute.service';
import { SchemeService } from '../scheme.service';
import { ScholarshipForm } from '../scholarship-form';

@Component({
  selector: 'app-institute-form-verify',
  templateUrl: './institute-form-verify.component.html',
  styleUrls: ['./institute-form-verify.component.css']
})
export class InstituteFormVerifyComponent implements OnInit {

  constructor(private route: ActivatedRoute,private schemeService : SchemeService, private instituteService: InstituteService, private router: Router) { }

  public formId;
  formModel = new ScholarshipForm();

  ngOnInit(): void {
    if(sessionStorage.getItem('userType')=="institute" && sessionStorage.getItem('instituteId')!=null){
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.formId = id;
    this.schemeService.showForm(this.formId).subscribe(data => this.formModel = data);
    }
    else{
      sessionStorage.clear();
      this.router.navigate(['instituteLogin']);
    }
   

  }

  approveForm(){
    this.instituteService.approveForm("Approved",this.formId).subscribe();
    this.router.navigate(['instituteDashboard/formVerification']);
  }

  rejectForm(){
    this.instituteService.rejectForm("Rejected",this.formId).subscribe();
    this.router.navigate(['instituteDashboard/formVerification']);
  }

}
