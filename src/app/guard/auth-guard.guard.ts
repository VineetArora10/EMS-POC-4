import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StringDecoder } from 'string_decoder';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    if(localStorage.getItem("currentuser")){
      return true;
    }
    this.router.navigateByUrl('')
      return false;
    }
  }
 
