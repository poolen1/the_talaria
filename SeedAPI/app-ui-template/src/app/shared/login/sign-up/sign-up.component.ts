import { Component, OnInit } from '@angular/core';
import {
	Validator,
	ValidationErrors,
	FormGroup,
	NG_VALIDATORS,
	NgForm,
	Validators
} from "@angular/forms";

import { User } from '../../../models/user';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userName: string = '';
  userEmail: string = '';
  userPassword: string = '';
  passwordConfirmation: string;
  model: User;

  submitted: boolean;

  constructor() {
    this.model = new User(this.userName, this.userEmail, this.userPassword);
    this.passwordConfirmation = '';
    this.submitted = false;
  }

  ngOnInit(): void {  
  }

  onSubmit(): void
  {
    this.submitted = true;
  }

}
