import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  

  constructor(private http:HttpClient) { }

  //signup

  signup(email:any,name:any,password:any){
    const data ={
        email,
        name,
        password
    }

    //signup api call
    return this.http.post('http://localhost:3000/signup',data)
  }

  //login

  login(email:any,password:any){
    const data ={
        email,
        password
    }

    //login api call
    return this.http.post('http://localhost:3000/login',data)
  }




}
