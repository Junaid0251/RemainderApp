import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  email:any
  event:any
  constructor(private ds:DataserviceService) { 
    this.email=JSON.parse(localStorage.getItem("currentEmail")||"")
    this.event =this.ds.viewEvent(this.email)
    .subscribe((result:any)=>{
      if(result){
        this.event=result.event
      }
    },result=>{
      alert(result.error.message)
    })

   }

  ngOnInit(): void {
  }

 

  delete(){
    this.email=JSON.parse(localStorage.getItem("currentEmail")||"")
    this.ds.delete(this.email)
    .subscribe((result:any)=>{
      alert(result.message)
    },
    result=>{
      alert(result.error.message)
    })
  }

}
