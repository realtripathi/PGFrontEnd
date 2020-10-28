import { Component, OnInit } from '@angular/core';
import { NodalLogin } from "../nodal-login";

@Component({
  selector: 'app-nodal-login',
  templateUrl: './nodal-login.component.html',
  styleUrls: ['./nodal-login.component.css']
})
export class NodalLoginComponent implements OnInit {

  nodalForm=new NodalLogin(null,null);
  constructor() { }

  ngOnInit(): void {
  }

}
