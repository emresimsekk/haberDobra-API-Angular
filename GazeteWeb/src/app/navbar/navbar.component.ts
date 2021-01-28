import { Component, OnInit } from '@angular/core';
import { FormArrayName } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminloginService } from '../_adminLoginService/adminlogin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private adminlogin:AdminloginService) { }

  loginac:boolean=false;
  logged:boolean=false;
  model: any= { };
  ngOnInit(): void {
  }
  login() {
   
    this.adminlogin.login(this.model).subscribe(next=>{
      console.log("login başarılı ");
      this.router.navigate(['/anasayfa']);
      this.loginac=false;
      this.logged = false;
    }, error => {
      console.log("login başarışız.");
    })
  }
  loggedIn(){
    return this.adminlogin.loggedIn();
  }

  adminloginIn(){
this.loginac=true;
return this.loginac;
  }
  logout(){
    localStorage.removeItem("token");
    console.log("logout");
    this.router.navigate(['/anasayfa']);
  }


}
