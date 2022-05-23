import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const options ={
  headers:new HttpHeaders()
}


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {


  // currentEmail=JSON.parse(localStorage.getItem("currentEmail")||'')
  currentEmail:any
  currentUser:any
  date:any

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
    localStorage.setItem("currentEmail",JSON.stringify(this.currentEmail))
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



//addd token to header
getOptions(){
    
  //fetch token

  const token =JSON.parse(localStorage.getItem("token")||"")

  //create HttpHeader

  let headers =new HttpHeaders

  if(token){
    headers = headers.append('x-access-token',token)
    options.headers=headers;
    
  }
  return options
}






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
    return this.http.post('http://localhost:3000/addEvent', data,this.getOptions())
  }

  //view event

  viewEvent(email:any){
    const data={
      email
      
    }
    return this.http.post('http://localhost:3000/viewEvent', data,this.getOptions())
  }

  
  // cardView

  cardView(email:any){
    // this.date=JSON.parse(localStorage.getItem("currentDate")||"")
    const data={
      email
      // date:this.date
    }
    return this.http.post('http://localhost:3000/cardView', data,this.getOptions())
  }


  //delete event

  delete(email:any){
    return this.http.delete('http://localhost:3000/deleteEvent/'+email)
  }


}
