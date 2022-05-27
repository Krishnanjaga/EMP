import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  authForm1!: FormGroup;
  title1: string ='';
  list:any;
  value:boolean=true;
  hello:any;
  array=["hello"]
  router: any;
  
  
  constructor(public fb:FormBuilder,private app:AppService, ) {
      this.authForm1 = this.fb.group({
        'email': ['', Validators.required],
        'password': ['', Validators.required],
     });
    }
  ngOnInit(): void {
    
 
}
submit(){
  console.log(this.authForm1.value.email,this.authForm1.value.password);
  let email =this.authForm1.value.email;
  let password =this.authForm1.value.password;
  this.app.getData().subscribe((res:any)=>{
    this.list = res;
    this.list.forEach((data:any) => {
     if(email === data.email && password === data.password)
   {
      alert(this.array)
      if(this.value === false){
      this.value=true;
      this.router.navigate(['/kj']);
  
      }
      else{  
        this.value=false;
      }
    }

    });

  })


this.authForm1.reset();

}
getData()
{
  console.log(this.authForm1.value.email)
  this.app.getData().subscribe((res:any)=>{
    this.list = res;
   console.log(this.list,);
   this.authForm1.reset();
  })
}
}

