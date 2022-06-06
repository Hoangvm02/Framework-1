import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {
  constructor(private router: Router){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // lấy ra thông tin ng dùng đã đăng nhập 
      const loggedInUser = localStorage.getItem('loggedInUser');
      // kiểm tra nếu cí thì cho vào admin
      if(loggedInUser){
        return true;
      }
      // nếu không cho về trang login
      this.router.navigateByUrl('auth/login')
    return false;
  }
  
}
