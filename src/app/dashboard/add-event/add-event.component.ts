import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event:any;
  date:any
  email:any

  constructor(private ds:DataserviceService) { }

  ngOnInit(): void {
  }
  add(){
    let email=this.email;
    let event =this.event;
    let date = this.date;
    // console.log(event);
    // console.log(email);
    this.ds.addEvent(email,event,date)
    .subscribe((result:any)=>{
      if(result){
       alert(result.message);
       
      }
    })
  }

}
