import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { DataserviceService } from '../service/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm=this.fb.group({
    email:['',[Validators.required,Validators.pattern('[a-zA-Z@.0-9]*')]],
    name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  

  constructor(private fb:FormBuilder,private ds:DataserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  signup(){
    let email = this.registerForm.value.email
    let name = this.registerForm.value.name
    let password = this.registerForm.value.password


    if(this.registerForm.valid)
    {
      this.ds.signup(email,name,password)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          this.router.navigateByUrl("")
        }
      },result=>{
        alert(result.error.message)
      })
    }
    else
    {
      alert("invalid form")
    }
  }

}
