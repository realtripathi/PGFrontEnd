import { Component, OnInit } from '@angular/core';
import { Institute } from '../institute';

@Component({
  selector: 'app-institute-register',
  templateUrl: './institute-register.component.html',
  styleUrls: ['./institute-register.component.css']
})
export class InstituteRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inst_cats = ['Autonomous Higher Education Institute','Central University','State University','Deemed Universities','Private University'];

  inst_states = ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttarakhand','Uttar Pradesh','West Bengal','Andaman and Nicobar Islands','Chandigarh','Dadra and Nagar Haveli','Daman and Diu','Delhi','Lakshadweep','Puducherry'];

  inst_districts = ['Ahmednagar','Akola','Amravati','Aurangabad','Beed','Bhandara','Buldhana','Chandrapur','Dhule',' Gadchiroli','Gondia','Hingoli','Jalgaon','Jalna','Kolhapur','Latur','Mumbai City','Mumbai Suburban','Nagpur','Nanded','Nandurbar','Nashik','Osmanabad','Palghar','Parbhani','Pune','Raigad','Ratnagiri','Sangli','Satara','Sindhudurg','Solapur','Thane','Wardha','Washim','Yavatmal'];

  inst_types = ['Arts and Science Colleges','Indian Institutes of Information Technology','Indian Institutes of Technology','Indian Institutes of Management','National Institutes of Technology','National Law University','Indian Institutes of Science Education and Research','School of Planning and Architecture','Agricultural institutions','Ayurvedic colleges','Business schools','Drama schools','Economics schools','Islamic institutions','Law schools','Medical colleges','Aerospace Engineering schools','Dental colleges','Fashion schools','Film schools','Hospitality schools','Architecture schools','Journalism schools','Maritime colleges','Nursing schools','Optometry schools','Institutions of Music','Pharmacy schools','Veterinary medicine schools'];

  inst_years = ['2016','2017','2018'];

  InstituteModel = new Institute(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,false);

}
