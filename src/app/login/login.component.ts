import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  counter = 0

  loginForm = new FormGroup({
    login: new FormControl('',),
    password: new FormControl(''),
  });

  inscriptionForm = new FormGroup({
    UserName: new FormControl('', Validators.required),
    FullName: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),

  });
  constructor() { }
  ngOnInit(): void {
  }
  onSubmit1() {
    this.counter++
    const c = this.loginForm.value
    console.log("submitclicked", c);
  }

  onSubmit2() {
    console.log("clicked", this.inscriptionForm.value)
  }
}
