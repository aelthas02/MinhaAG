import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, Observable } from 'rxjs';
import { User } from './DTOs/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    private http: HttpClient
  ) { }

  public login(username: string): Observable<User> {
    return this.http.get<User>(`/api/user?username=${username}`).pipe();
  }

  public isAuthenticated(data: any, password: string): boolean {
    if(data[0].password === password) {
      localStorage.setItem('token', data[0].token);
      return true;
    } else {
      return false;
    }
  }

  public verifyAuthentication(): boolean {
    return localStorage.getItem('token') === null ? false : true;
  }

}
