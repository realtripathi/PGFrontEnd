import { Component, OnInit } from '@angular/core';
import { ForgotPassword } from '../forgotPassword'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  forgotPasswordModel = new ForgotPassword(null,null);

  forgotPasswordModules = ['Student', 'Institute', 'State Nodal Officer','Ministry'];
}
