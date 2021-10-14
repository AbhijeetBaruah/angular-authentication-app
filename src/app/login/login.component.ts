import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginData } from './loginData';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm:any;
  isNotValid:boolean;

  constructor(private authService:AuthService,
    private formBuilder:FormBuilder,
    private route:Router,
    private activateRoute:ActivatedRoute) { 
      this.isNotValid = true;
    }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
    
  }


  get userName(){
    let valid =  (this.myForm as FormGroup).get('username') as FormControl;
    
    return valid;
  }
  get password(){
    let valid =  (this.myForm as FormGroup).get('password') as FormControl;
    
    return valid;
  }

  onLogin(vaah:any){
    let credential:LoginData;
    credential = {
      username:this.userName.value,
      password:this.password.value
    }
    console.log(credential);
    
    this.authService.login(credential).subscribe(
      (result)=>{
        let returnUrl = this.activateRoute.snapshot.queryParamMap.get('returnUrl');
        this.route.navigate([ returnUrl||'']);
        this.authService.store(result as LoginData);
        this.isNotValid = this.authService.isLoggedIn();
      },
      err=>{
        this.isNotValid = this.authService.isLoggedIn();
        console.log("error");
      }
    )
  }
  

}
