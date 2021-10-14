import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authServie:AuthService, private router:Router) { }

  canActivate(route:any,state:RouterStateSnapshot){
    if(this.authServie.isLoggedIn()) return true;
    this.router.navigate(['/login'],{ queryParams:{returnUrl:state.url}});
    return false;
  }
}
