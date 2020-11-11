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
    if (sessionStorage.getItem('userType') == "student" && sessionStorage.getItem('studentId') != null) {
      this.scholarForm = JSON.parse(sessionStorage.getItem('form'));
    }
    else {
      sessionStorage.clear();
      this.router.navigate(['studentLogin']);
    }
  }

  applyScheme() {
    console.log(this.scholarForm);
    this.studentService.applyScheme(this.scholarForm, this.scholarForm.instituteId, this.scholarForm.schemeUid, this.scholarForm.aadharNumber).subscribe(data => {
      //alert(JSON.stringify(data));
      if (data.status == 'SUCCESS') {
        this.studentService.fetchformId(parseInt(sessionStorage.getItem('studentId'))).subscribe(data => {
          this.formId = data;
          alert(this.formId);
          this.upload();
        });
        this.router.navigate(['studentDashboard/profile']);
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

  udoc1 = false;
  udoc2 = false;
  udoc3 = false;
  udoc4 = false;
  udoc5 = false;
  udoc6 = false;
  udoc7 = false;
  udoc8 = false;
  udoc9 = false;
  udoc10 = false;

  onFileChange1(event) {
    this.doc1 = event.target.files[0];
    this.udoc1 = true
  }

  onFileChange2(event) {
    this.doc2 = event.target.files[0];
    this.udoc2 = true
  }
  onFileChange3(event) {
    this.doc3 = event.target.files[0];
    this.udoc3 = true
  }
  onFileChange4(event) {
    this.doc4 = event.target.files[0];
    this.udoc4 = true
  }
  onFileChange5(event) {
    this.doc5 = event.target.files[0];
    this.udoc5 = true
  }
  onFileChange6(event) {
    this.doc6 = event.target.files[0];
    this.udoc6 = true
  }
  onFileChange7(event) {
    this.doc7 = event.target.files[0];
    this.udoc7 = true
  }
  onFileChange8(event) {
    this.doc8 = event.target.files[0];
    this.udoc8 = true
  }
  onFileChange9(event) {
    this.doc9 = event.target.files[0];
    this.udoc9 = true
  }
  onFileChange10(event) {
    this.doc10 = event.target.files[0];
    this.udoc10 = true
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
    console.log(formData.get('studentPic'));

    this.studentService.uploadDocument(formData).subscribe(data => {
      //alert(JSON.stringify(data));
    })
  }

  finalCall() {
    this.applyScheme();
  }

}
