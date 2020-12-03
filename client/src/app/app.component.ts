import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './_auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Miss Goma 2021 | La Garante dela Paix';

  constructor(private router:Router, public auth: AuthenticationService) { }

  ngOnInit() {
 }


  hasRoute(route: string){
    return this.router.url.includes(route)
  }
}
