import { Component, OnInit } from '@angular/core';
import { ScholarshipForm } from "../scholarship-form"
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  scholarForm: ScholarshipForm;

  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService) { }

  ngOnInit(): void {
    this.scholarForm = JSON.parse(sessionStorage.getItem('form'));
  }

  applyScheme() {
    console.log(this.scholarForm);
    this.studentService.applyScheme(this.scholarForm, this.scholarForm.instituteId, this.scholarForm.schemeUid, this.scholarForm.aadharNumber).subscribe(data => {
      //alert(JSON.stringify(data));
      if (data.status == 'SUCCESS') {
        this.router.navigate(['studentProfile']);
      }
      else {
        //this.router.navigate(['error']);
      }
    })
  }

  doc1: any
  doc2: any
  doc3: any
  doc4: any
  doc5: any
  doc6: any
  doc7: any
  doc8: any
  doc9: any
  doc10: any

  onFileChange1(event) {
    this.doc1 = event.target.files[0];
  }
  
  onFileChange2(event) {
    this.doc2 = event.target.files[0];
  }
  onFileChange3(event) {
    this.doc3 = event.target.files[0];
  }
  onFileChange4(event) {
    this.doc4 = event.target.files[0];
  }
  onFileChange5(event) {
    this.doc5 = event.target.files[0];
  }
  onFileChange6(event) {
    this.doc6 = event.target.files[0];
  }
  onFileChange7(event) {
    this.doc7 = event.target.files[0];
  }
  onFileChange8(event) {
    this.doc8 = event.target.files[0];
  }
  onFileChange9(event) {
    this.doc9 = event.target.files[0];
  }
  onFileChange10(event) {
    this.doc10 = event.target.files[0];
  }

  formId: any

  upload() {
    let formData: FormData = new FormData();
    formData.append('formId', this.formId);
    formData.append('domicileCertificate', this.doc1)
    formData.append('studentPic', this.doc2)
    formData.append('prevYearMarksheet', this.doc3)
    formData.append('class10Marksheet', this.doc4)
    formData.append('class12Marksheet', this.doc5)
    formData.append('aadharCard', this.doc6)
    formData.append('bankPassbook', this.doc7)
    formData.append('instituteIdCard', this.doc8)
    formData.append('casteIncomeCertificate', this.doc9)
    formData.append('feeReceiptOfCurrentYear', this.doc10)
    //console.log(formData.get('profilePic'));

    this.studentService.uploadDocument(formData).subscribe(data => {
      alert(JSON.stringify(data));
    })
  }

  finalCall(){
    this.applyScheme();
    this.studentService.fetchformId(parseInt(sessionStorage.getItem('studentId'))).subscribe(data => this.formId=data);
    this.upload();
  }

}
