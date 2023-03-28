import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit{
  formgroup:any;
  posting=false;
  formArray:any = [];

  constructor(private router:Router){}
  
  ngOnInit(): void {
    this.load();
  }

  load(){
    this.formgroup= new FormGroup({
      firstname:new FormControl("", Validators.required),
      lastname:new FormControl("", Validators.required),
      date:new FormControl("", Validators.required),
      email:new FormControl("", Validators.compose([Validators.required,Validators.email])),
      password:new FormControl("", Validators.required)
      
     
    })
  }



  submit(data:any){
    this.posting=true;
    this.formArray.push(data);
    console.log(this.formArray);

    localStorage.setItem("info",JSON.stringify(this.formArray));
    this.load(); 
    this.router.navigate(['log-in'])
  }

  
}
