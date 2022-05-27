import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authType: String = '';
  title: string='';
  isSubmitting: boolean = false;
  authForm: FormGroup;
  datalist:any=[];
  value1:boolean=true;
  save:boolean=true;
  list: any;
  

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private app: AppService
  ) {
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'username':['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submitForm() {
   this.app.saveApp(this.authForm.value).subscribe(()=>{
    })
   let email =this.authForm.value.email;
   this.app.getData().subscribe((res:any)=>{
    // let response =res
    //  this.datalist.push
    //  ( response);
     this.list=res;

   })

      this.list.forEach((data:any) => {
       if(email == data.email)
     {
     alert("success")
      }
      });
      console.log("data",this.list)
      
  }

}


/* for(let i=0;i<this.list.length;i++){
  if(email == this.list[i].email){
    this.save=false;

  }
}

  if(this.save){
     this.app.saveApp(this.authForm.value).subscribe(()=>{
     })
     this.authForm.reset();
     this.save=true;

  } */


   
  



