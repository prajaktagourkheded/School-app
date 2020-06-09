import { Component, OnInit } from '@angular/core';

import { FormGroup , FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.page.html',
  styleUrls: ['./registeration.page.scss'],
})
export class RegisterationPage implements OnInit {
  pwddanger : boolean ;
  danger : boolean ;
  registerForm = new FormGroup({
    fname : new FormControl( '',Validators.required),
    lname : new FormControl( '',Validators.required),
    school : new FormControl( '',Validators.required),
    title : new FormControl( '',Validators.required),
    mob : new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(12) ]),
    email : new FormControl( '', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]),
    pwd : new FormControl( '',[Validators.required,Validators.minLength(7), Validators.maxLength(12)]),
    rpwd : new FormControl( '',Validators.required)

  })
  constructor() { }

  ngOnInit() {
  }
}
