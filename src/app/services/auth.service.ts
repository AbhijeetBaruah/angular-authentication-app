import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from '../login/loginData';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) {
  }

  login(credential:LoginData){
    console.log('before');
    return this.httpClient.post('/api/login',credential);
  }
}
