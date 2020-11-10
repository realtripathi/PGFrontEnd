import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MinistryService } from '../ministry.service';
import { Nodal } from '../nodal';

@Component({
  selector: 'app-nodal-register',
  templateUrl: './nodal-register.component.html',
  styleUrls: ['./nodal-register.component.css']
})
export class NodalRegisterComponent implements OnInit {

  nodalStateInvalid=true;
  constructor(private ministryService: MinistryService, private router:Router) { }

  ngOnInit(): void {
  }

  nodalDistricts = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttarakhand','Uttar Pradesh','West Bengal','Andaman and Nicobar Islands','Chandigarh','Dadra and Nagar Haveli','Daman and Diu','Delhi','Lakshadweep','Puducherry'];

  nodalModel= new Nodal();

  nodaldistrictInvalid= true;
  nodalPasswordNotMatch=true;

  validatenodalDistrict(value){
    if(value == ''){
      this.nodaldistrictInvalid = true;
    }
    else{
      this.nodaldistrictInvalid = false;
    }
  }

  nodalConfirmPassword(value1, value2){
    if(value1 == value2){
      this.nodalPasswordNotMatch = true;
    }
    else{
      this.nodalPasswordNotMatch = false;
    }
  }

  register() {
    //console.log(this.nodalModel);
    this.ministryService.registerNodal(this.nodalModel).subscribe(data => {
     //alert(JSON.stringify(data));
     if(data.status == 'SUCCESS') {
       this.router.navigate(['ministryDashboard']);
     }
     else {
       //this.router.navigate(['error']);
     }
   })
   }

   validateNodalState(value){
    if(value == ''){
      this.nodalStateInvalid = true;
    }
    else{
      this.nodalStateInvalid = false;
    }
  }

 

}
