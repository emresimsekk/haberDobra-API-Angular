import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  baseUrl:string="http://localhost:3002/api/signin";
  jwtHelper = new JwtHelperService();
  decodedToken:any;

  constructor(private http:HttpClient) { }


  login(model:any){
    return this.http.post(this.baseUrl,model).pipe(
        map((response:any)=>{
          const result=response;
          if(result){
          localStorage.setItem("token", result.token);
              }
        })
    );
      }
      loggedIn(){
        const token=localStorage.getItem("token");
        return !this.jwtHelper.isTokenExpired(token);
      }


}
