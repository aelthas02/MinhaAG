import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    
    if(state.url === '/index' && !this.authService.verifyAuthentication()) {
      return true;
    }
    if(state.url === '/index' && this.authService.verifyAuthentication()) {
      this.router.navigate(['/home']);
      return true;
    }
    if((state.url === '/home' || state.url === '/bets') && this.authService.verifyAuthentication()) {
      return true;
    }
    
    this.router.navigate(['/index']);
    return false;
  }
}
