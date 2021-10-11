import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm:any;

  constructor(private authService:AuthService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  get formControls(){
    return (this.myForm as FormGroup).controls;
  }

  get userName(){
    let valid =  (this.myForm as FormGroup).get('username') as FormControl;
    console.log(valid);
    
    return valid;
  }
  get password(){
    let valid =  (this.myForm as FormGroup).get('password') as FormControl;
    console.log(valid);
    
    return valid;
  }
  onSubmit(vaah:any){

  }
  onclick(){
    this.authService.login()
    .subscribe(data=>{
      console.log(data);
    })
  }

}
