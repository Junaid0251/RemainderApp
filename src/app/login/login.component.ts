import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentEmail:any

  loginform = this.fb.group({
    email:['',[Validators.required,Validators.pattern('[a-zA-Z@.0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private fb:FormBuilder,private ds:DataserviceService,private router :Router) { }

  ngOnInit(): void {
  }

  //login

  login(){
    let email = this.loginform.value.email
    let password =this.loginform.value.password


    this.ds.login(email,password)
    .subscribe((result:any)=>{
      if(result){
        
        console.log(result.email);
        
        localStorage.setItem('currentEmail',JSON.stringify(result.currentemail))
        localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
        localStorage.setItem('token',JSON.stringify(result.token))
        this.router.navigateByUrl('/dashboard')
      }
    },result=>{
      alert(result.error.message)
    })
  }

}
