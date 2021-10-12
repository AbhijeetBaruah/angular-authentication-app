import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginData } from './loginData';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm:any;
  isValid:boolean;

  constructor(private authService:AuthService,
    private formBuilder:FormBuilder,
    private route:Router) { 
      this.isValid=false;
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
      result=>{
        if(result){
          this.route.navigate(['']);
          this.isValid = true;
          
        }
        else{
          this.isValid=false;
        }
      }
    )
  }
  

}
