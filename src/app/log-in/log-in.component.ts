import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  dataArray: any = []
  formgroup: any;

  constructor() {
    this.dataArray = JSON.parse(localStorage.getItem("info") || "[]")
    console.log(this.dataArray);

  }
  ngOnInit(): void {
    this.load();

  }
  load() {
    this.formgroup = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)



    })
  }



  login(data: any) {
    console.log(data);
    if (data != "") {
      
      // // console.log(this.dataArray[0].email);
      for (let i = 0; i < this.dataArray.length; i++) {
        if(data.email == this.dataArray[i].email && data.password == this.dataArray[i].password){
          alert("success")
        }
       
      }
     
    }
    
    // else{
    //   alert("invalid password or username")
    // } 
  

  }
}
