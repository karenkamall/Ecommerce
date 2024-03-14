import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   
constructor(private _AuthService:AuthService , private _Router:Router){}

msgError:string='';
isLoading:boolean=false;


registerForm:FormGroup= new FormGroup(
  {
    name: new FormControl(null ,[Validators.required ,Validators.minLength(3),Validators.maxLength(20) ]),
    email: new FormControl(null ,[Validators.required ,Validators.email ]),
    password: new FormControl(null,[Validators.required , Validators.pattern(/^\w{6,}$/)]),
    rePassword: new FormControl(null,[Validators.required , Validators.pattern(/^\w{6,}$/)]),
    phone: new FormControl(null,[Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/) ]),
  }
);

handleForm():void{
   
if(this.registerForm.valid){
   
this.isLoading=true;

 this._AuthService.setRegister(this.registerForm.value).subscribe(
  {
   next:(response)=>{
    if(response.message = 'success'){
      this.isLoading=false;
       this._Router.navigate(['/login'])
    }
  },
  error:(err:HttpErrorResponse)=>{
    this.isLoading=false;
    this.msgError=err.error.message
    // console.log(err.error.message);
  }
  
 
 
 }) 
}
 
}




}
