import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, EmailValidator } from '@angular/forms';

interface User{
  email?: string;
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(  private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
  }

  user: User = {
    email:'',
  }

  Email: string =""

  get email(){
    return this.registrationForm.get('email');
  }

  public errorMessages = {
    email: [
      {type: 'required', message: 'Email is required'},
      {type: 'pattern', message:'Please enter a valid email address'}
    ],
  };

  registrationForm = this.formBuilder.group({
    email:['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]],
  },

);
  

}
