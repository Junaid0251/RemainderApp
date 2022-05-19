import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog,MatDialogConfig} from "@angular/material/dialog"
import { AddEventComponent } from './add-event/add-event.component';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loginDate :any
  // currentUser =JSON.parse(localStorage.getItem("currentUser")||"")
  user:any
  
  
  
  

  constructor(private router:Router , private dialog:MatDialog) { }

  ngOnInit(): void {
    this.loginDate=new Date()
    this.user=JSON.parse(localStorage.getItem("currentUser")||"")
    // console.log(this.user);
    
    
  }

  //logout

  logout()
  {
    this.router.navigateByUrl("")
  }

  //Event adding

  addEvent(){
    const dialogConfig =new MatDialogConfig()
    dialogConfig.disableClose=true
    dialogConfig.autoFocus=true
    dialogConfig.width="60%"
    this.dialog.open(AddEventComponent)
  }

  //view event

  viewEvent(){
    this.router.navigateByUrl("viewevent")
  }

}
