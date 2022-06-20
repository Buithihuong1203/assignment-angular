import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = localStorage.getItem('loggedInUser');
      if(currentUser){
      return true;
    }
    this.router.navigateByUrl('/auth/login');
    return false;
  }

}

//check bảo vệ

//currentUser : check xem đã login chưa trước khi vào admin
