import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //
    return this.authService.isAuth().toPromise().then((response) => {
      if (response === true) {
        console.log('Hello from AuthGuard: true');
        return true;
      } else {
        console.log('Hello from AuthGuard: false');
        this.router.navigate(['/login']);
        return false;
      }
    }).catch((error) => {
      console.log('Hello from AuthGuard: catch(false)');
      this.router.navigate(['/login']);
      return false;
    }
    );


  }
}
