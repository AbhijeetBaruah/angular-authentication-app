import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) {
  }

  login(){
    console.log('before');
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
