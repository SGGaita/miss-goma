import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import {AuthenticationService} from '../_auth/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pageTitle = "Administrator Login | Miss Goma"

  loginForm: FormGroup
  fieldTextType: boolean;
  submitted: boolean = false;
  successMsg: string;
  errorMsg: any;
  loading = false;
  public loadingMsg = "Authenticating...Please wait";
  _userData: any

  constructor(private title: Title,private authService: AuthenticationService, private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {

    this.title.setTitle(this.pageTitle)

    this.loginForm = this.fb.group({
      userName:[null, Validators.required],
      password: [null, Validators.required]
    })
  }

  //get form controls
get f(){
  return this.loginForm.controls;
}

login(){
    console.log("Does this really work")
  this.errorMsg = ""
  this.submitted = true

  if (this.loginForm.invalid) {
    return;
  }
  this.loading = true;
  this.authService.login(this.loginForm.value).subscribe(
    data => {
      console.log(data)
      
      //get and decode token
  let Token = this.authService.getToken()
  console.log("Customer token", Token)
  var decoded = jwt_decode(Token);
  console.log("Decoded token", decoded)
  
      this.successMsg = "Successful Authentication";
      this.loading = false;
      this.router.navigateByUrl('/admin/dashboard')
    },
    err => {this.errorMsg = err.error.reason;
      this.loading = false;
      console.log("This is error", this.errorMsg)
    })
}

}
