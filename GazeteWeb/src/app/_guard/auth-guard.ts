import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminloginService } from '../_adminLoginService/adminlogin.service';



@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate {

  constructor(private adminloginService:AdminloginService, private router:Router) { }

  canActivate(){
    if(this.adminloginService.loggedIn()){
      return true;
    }
    console.log("auth guard");
    this.router.navigate(['/anasayfa']);
    return false;
  }

}

