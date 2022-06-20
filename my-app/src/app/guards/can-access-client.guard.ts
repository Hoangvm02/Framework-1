import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessClientGuard implements CanActivate {
  constructor(private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') as string);
      // kiểm tra nếu cí thì cho vào admin
      if (!loggedInUser) {
        return true;
      }
      // nếu không cho về trang login
      this.router.navigateByUrl('/')
      return false;
  }
  
}
