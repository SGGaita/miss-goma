import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import 'rxjs/operators';
import { Router } from '@angular/router';

export interface UserDetails {
  id_user: number,
  userName: string,
  email: string,
  password: string,
  roles: string;
  exp: number,
  iat: number
}

interface TokenResponse {
  token: string
}

export interface TokenPayload {
  //user_id: number,
  userName: string,
  email: string,
  password: string,
  roles: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token: string

  constructor(private http: HttpClient, private router: Router) { }

  //save token
  public saveToken(token: string): void {
    localStorage.setItem('userToken', token)
    this.token = token;
  }


  //get token
  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('userToken')
    }
    return this.token
  }

  //get user details
  public getUserDetails(): UserDetails {
    const token = this.getToken()
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    } else {
      return null
    }
  }

  //Logged in
  public isLoggedIn(): boolean {
    const user = this.getUserDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }

  private request(method: 'post' | 'get', type: 'login' | 'register' | 'profile', user?: TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`/api/${type}`, user);
    } else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` } });
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

  public register(user: TokenPayload) {
    return this.request('post', 'register', user);
  }

  public login(user: TokenPayload) {
    console.log("User payload", user)
    return this.request('post', 'login', user);
  }

  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }

  //logout
  public logout(): void {
    this.token = ''
    window.localStorage.removeItem('userToken')
    this.router.navigateByUrl('/admin')
  }
}
