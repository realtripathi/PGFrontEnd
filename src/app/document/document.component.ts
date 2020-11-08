import { Component, OnInit } from '@angular/core';
import { ScholarshipForm } from "../scholarship-form"
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  scholarshipFormModel=new ScholarshipForm();
  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
  }

 

}
