import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'




@Injectable({
  providedIn: 'root'
})
export class DataserviceService {


  // currentEmail=JSON.parse(localStorage.getItem("currentEmail")||'')
  currentEmail:any
  currentUser:any

  constructor(private http: HttpClient) { 
    // this.getDetails()
  }


  // saveData(email:any){
  //   if(email){
  //     localStorage.setItem('currentEmail',JSON.stringify(email))
  //   }
  //   return this.http.post('http://localhost:3000',this.saveData)
  // }

//to save data in local storage

saveDetails(){
  // localStorage.setItem("database",JSON.stringify(this.database))

  if(this.currentEmail){
    localStorage.setItem("currentAcno",JSON.stringify(this.currentEmail))
  }


  if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  }

}

// getDetails(){
//   if(localStorage.getItem("currentAcno")){
//     this.currentEmail=JSON.parse(localStorage.getItem("currentAcno")||'')
    
    

//   }

//   if(localStorage.getItem("currentUser")){
//     this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')

//   }
// }






  //signup

  signup(email: any, name: any, password: any) {
    const data = {
      email,
      name,
      password
    }

    //signup api call
    return this.http.post('http://localhost:3000/signup', data)
  }
  

  //login

  login(email: any, password: any) {
    const data = {
      email,
      password
    }

    // this.saveData(email)
   
    

    //login api call
    return this.http.post('http://localhost:3000/login', data)
  }

  addEvent(email:any,event:any,date:any) {
    const data={
      email,
      event,
      date
    }
    console.log(data);
    
    //event add
    return this.http.post('http://localhost:3000/addEvent', data)
  }

  viewEvent(email:any){
    const data={
      email
      
    }
    return this.http.post('http://localhost:3000/viewEvent', data)
  }


}
