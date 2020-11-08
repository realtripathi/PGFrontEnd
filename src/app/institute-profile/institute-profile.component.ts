import { Component, OnInit } from '@angular/core';
import { Institute } from '../institute';
import { InstituteService } from '../institute.service';

@Component({
  selector: 'app-institute-profile',
  templateUrl: './institute-profile.component.html',
  styleUrls: ['./institute-profile.component.css']
})
export class InstituteProfileComponent implements OnInit {

  instituteId: any;
  instituteModel= new Institute();

  constructor(private studentService: InstituteService) { 
    this.instituteId = sessionStorage.getItem('instituteId');
  }

  ngOnInit(): void {
    this.studentService.viewProfile(this.instituteId).subscribe(data => this.instituteModel = data);
  }

}
