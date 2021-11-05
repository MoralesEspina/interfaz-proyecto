import { SecurityService } from 'src/app/componentes/services/security.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private security : SecurityService,
              private _router : Router){

  }
  canActivate(): boolean  {
    if(this.security.logedIn()){
      return true;
    }
    this._router.navigate(["/login"]);
    return false;
  }

}
