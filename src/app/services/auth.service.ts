import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from '../login/loginData';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn():boolean {

    if(localStorage.getItem('token') != null){
      return true;
    }
    return false;
  }

  constructor(private httpClient:HttpClient) {
  }

  login(credential:LoginData){
    localStorage.removeItem('token');
    console.log('before');
    return this.httpClient.post('/api/login',credential);
  }

  store(credential:LoginData){
    localStorage.setItem('token',credential.token as string);
  }

  getToken():any{
    let token = localStorage.getItem('token');
    return token;
  }

  isAdmin():boolean{
    let token = this.getToken();
    if(token !=null){
      let decoded:LoginData = jwt_decode(token);
      if(decoded.admin){
        return true;
      }
    }
    
    return false;
  }

  logout(){
    localStorage.removeItem('token');
  }
}
