import { Injectable } from '@angular/core';
import {Router, CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router) { }

  //canActivate for admin
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.auth.isLoggedIn()){
        //this.router.navigateByUrl('/dashboard');
        return true;
      }        
      this.router.navigateByUrl('/admin/login');  
      return false;
  }
  
}
