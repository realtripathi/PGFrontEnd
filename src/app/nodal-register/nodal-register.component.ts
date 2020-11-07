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

  constructor(private ministryService: MinistryService, private router:Router) { }

  ngOnInit(): void {
  }

  nodalStates = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttarakhand','Uttar Pradesh','West Bengal','Andaman and Nicobar Islands','Chandigarh','Dadra and Nagar Haveli','Daman and Diu','Delhi','Lakshadweep','Puducherry'];

  nodalModel= new Nodal();

  register() {
    console.log(this.nodalModel);
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

 

}
