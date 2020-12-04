import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { AuthenticationService } from './_auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Miss Goma 2021 | La Garante dela Paix';
  fname: any;
  lname: any;

  constructor(private router:Router, public auth: AuthenticationService) { }

  ngOnInit() {

     //get and decode token
  let Token = this.auth.getToken()
  console.log("Customer token", Token)
  var decoded = jwt_decode(Token);
  console.log("Decoded token", decoded)
  this.fname = decoded.fname;
  this.lname = decoded.lname;
  
    
 }


  hasRoute(route: string){
    return this.router.url.includes(route)
  }
}
