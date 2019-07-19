import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

import { RegisterService } from '../../../services/register.service';
import { LoginService } from '../../../services/login.service';
import { AuthorizationService } from '../../../services/authorization.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class ErrorValidation implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'form-login',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class LoginComponent {
  constructor() { }

  ngOnInit() {
  }
  
}