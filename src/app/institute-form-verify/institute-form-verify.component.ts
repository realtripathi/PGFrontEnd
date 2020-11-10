import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstituteService } from '../institute.service';
import { SchemeService } from '../scheme.service';
import { ScholarshipForm } from '../scholarship-form';

@Component({
  selector: 'app-institute-form-verify',
  templateUrl: './institute-form-verify.component.html',
  styleUrls: ['./institute-form-verify.component.css']
})
export class InstituteFormVerifyComponent implements OnInit {

  constructor(private route: ActivatedRoute,private schemeService : SchemeService, private instituteService: InstituteService) { }

  public formId;
  formModel = new ScholarshipForm();

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.formId = id;
    this.schemeService.documentDownload(this.formId).subscribe();
    this.schemeService.showForm(this.formId).subscribe(data => this.formModel = data);

  }

  approveForm(){
    this.instituteService.approveForm("Approved",this.formId).subscribe()
  }

  rejectForm(){
    this.instituteService.rejectForm("Rejected",this.formId).subscribe()
  }

}
