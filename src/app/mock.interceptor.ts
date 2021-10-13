import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { LoginData } from './login/loginData';


@Injectable({
  providedIn:'root'
})
export class MockInterceptor implements HttpInterceptor {

  
  constructor(private route:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if(request.url.endsWith('/api/login') && request.method.toLowerCase() == 'post'){
      let token:string="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IjEyMzQ1Njc4OTAiLCJ1c2VybmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.lVhU7aeQULBPfEN3VT_JMi-wd3umx2Vf57oiHXc9Xe0";
      let credential:LoginData;
      credential = request.body as LoginData;
      console.log('after : '+credential);

      if(credential.username == 'abhijeet' && credential.password == 'password'){
        
        return of(new HttpResponse({ status: 200, body: {token:token}}));
      }
      else{
        return of(new HttpResponse({status:400,body:null}))
      }
      //throw new HttpErrorResponse({status:400,url:'admin'});
    }

    return next.handle(request);
  }
}
