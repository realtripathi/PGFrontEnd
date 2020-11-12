import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Institute } from '../institute';
import { InstituteService } from '../institute.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-institute-register',
  templateUrl: './institute-register.component.html',
  styleUrls: ['./institute-register.component.css']
})
export class InstituteRegisterComponent implements OnInit {

  inst_cats = ['Autonomous Higher Education Institute','Central University','State University','Deemed Universities','Private University'];

  inst_states = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttarakhand','Uttar Pradesh','West Bengal','Andaman and Nicobar Islands','Chandigarh','Dadra and Nagar Haveli','Daman and Diu','Delhi','Lakshadweep','Puducherry'];

  inst_districts = ['Ahmednagar','Akola','Amravati','Aurangabad','Beed','Bhandara','Buldhana','Chandrapur','Dhule',' Gadchiroli','Gondia','Hingoli','Jalgaon','Jalna','Kolhapur','Latur','Mumbai City','Mumbai Suburban','Nagpur','Nanded','Nandurbar','Nashik','Osmanabad','Palghar','Parbhani','Pune','Raigad','Ratnagiri','Sangli','Satara','Sindhudurg','Solapur','Thane','Wardha','Washim','Yavatmal'];

  inst_types = ['Arts and Science Colleges','Indian Institutes of Information Technology','Indian Institutes of Technology','Indian Institutes of Management','National Institutes of Technology','National Law University','Indian Institutes of Science Education and Research','School of Planning and Architecture','Agricultural institutions','Ayurvedic colleges','Business schools','Drama schools','Economics schools','Islamic institutions','Law schools','Medical colleges','Aerospace Engineering schools','Dental colleges','Fashion schools','Film schools','Hospitality schools','Architecture schools','Journalism schools','Maritime colleges','Nursing schools','Optometry schools','Institutions of Music','Pharmacy schools','Veterinary medicine schools'];

  inst_years = ['2016','2017','2018'];

  instituteModel = new Institute();

 

  constructor(private instituteService :InstituteService, private router:Router) { }

  ngOnInit(): void {
  }

  instCatInvalid = true;
  instStateInvalid = true;
  instDistrictInvalid = true;
  instPasswordNotMatch = true;
  instTypeInvalid = true;
  instinstaffUniStateInvalid=true;
  instinstinstadmitYearInvalid=true;
  instituteId:any;
  doc1: any;
  doc2: any;

  udoc1 = false;
  udoc2 = false;

  validateinstCat(value){
    if(value == ''){
      this.instCatInvalid = true;
    }
    else{
      this.instCatInvalid = false;
    }
  }
  validateinstState(value){
    if(value == ''){
      this.instStateInvalid = true;
    }
    else{
      this.instStateInvalid = false;
    }
  }
  validateinstDistrict(value){
    if(value == ''){
      this.instDistrictInvalid = true;
    }
    else{
      this.instDistrictInvalid = false;
    }
  }

  instConfirmPassword(value1,value2){
    if(value1 == value2){
      this.instPasswordNotMatch = true;
    }
    else{
      this.instPasswordNotMatch = false;
    }
  }

  validateinstType(value){
    if(value == ''){
      this.instTypeInvalid= true;
    }
    else{
      this.instTypeInvalid = false;
    }
  }

  validateinstaffUniState(value){
    if(value == ''){
      this.instinstaffUniStateInvalid= true;
    }
    else{
      this.instinstaffUniStateInvalid = false;
    }
  }

  validateinstadmitYear(value){
    if(value == ''){
      this.instinstinstadmitYearInvalid= true;
    }
    else{
      this.instinstinstadmitYearInvalid = false;
    }
  }

  onFileChange1(event) {
    this.doc1 = event.target.files[0];
    this.udoc1 = true;
  }
  
  onFileChange2(event) {
    this.doc2 = event.target.files[0];
    this.udoc2 = true;
  }

  upload() {
    let formData: FormData = new FormData();
    formData.append('instituteId', this.instituteId);
    formData.append('registrationCertificate', this.doc1)
    formData.append('affiliationCertificate', this.doc2)

    //console.log(formData.get('affiliationCertificate'));

    this.instituteService.uploadInsDocument(formData).subscribe(data => {
      //alert(JSON.stringify(data));
    })
  }

  register2(){
    //console.log(this.instituteModel);
    this.instituteService.registerAndfetchInstituteId(this.instituteModel).subscribe(data => {
     //alert(JSON.stringify(data));
     if(data.status == 'SUCCESS') {
       this.instituteId = data.instituteId;
       //alert(this.instituteId);
       this.upload();
       swal("Registration Successful");
       this.router.navigate(['instituteLogin']);
     }
     else {
       //this.router.navigate(['error']);
       swal("Please Verify Details");
     }
   })
  }

  register() {
    //console.log(this.instituteModel);
    this.instituteService.register(this.instituteModel).subscribe(data => {
     //alert(JSON.stringify(data));
     if(data.status == 'SUCCESS') {
       swal("Registration Successful")
       this.router.navigate(['instituteLogin']);
     }
     else {
       //this.router.navigate(['error']);
     }
   })
   }

}
