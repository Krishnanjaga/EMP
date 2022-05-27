import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, MaxLengthValidator, Validators, FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';


@Component({
  selector: 'app-kj',
  templateUrl: './kj.component.html',
  styleUrls: ['./kj.component.css']
})

export class KjComponent implements OnInit {
  
  currentItem!: any;
  title2!:any;
  ss=false;
  ss1=false;
  mvalue = 'male';
  gmvalue = 'female';
  title!:any;
  dataId:any;
  alert:boolean=false
  alert1:boolean=false
  // addApp!: FormGroup;
  valide:boolean=true;
  name="save"
  
  listData:any=[];
  value=false
  options = ["Banana", "Coconut","Elaneer", "Tapioca"]
  listOfOptions:any=[];
  
  
 
  constructor (private app:AppService, fb:FormBuilder){
 
  }

  
  addApp=new FormGroup({
    name:new FormControl('', Validators.required),
    Gender:new FormControl('',Validators.required),
    native:new FormControl('',Validators.required),
    contact:new FormControl('', Validators.required),
    Email:new FormControl('',Validators.required),
    
  });
  ngOnInit(): void {

    this.setOptions();

    
  }
  setOptions() {
    setTimeout(() => {
      this.listOfOptions = this.options;
    },)
  }
  male(){
    if(this.ss===false){
      this.ss=true
      this.title=this.mvalue
    }
    else{
      this.ss=false
      this.title=null
    }
    
  }
  male1(){
    if(this.ss1===false){
      this.ss1=true
      this.title=this.gmvalue
    }
    else{
      this.ss1=false
      this.title=null
    }
    
  }

onsubmit(){
console.log(this.addApp.value)
this.app.saveAp(this.addApp.value).subscribe((res:any)=>{
  this.getDat();
this.addApp.reset();
  this.alert=true;
  if(this.valide===false){
    this.valide=true
  }
  else{
    this.valide=false
  }
 
})
}
getDat(){
    this.app.getDat().subscribe((res:any)=>{
      this.listData = res;
     console.log(this.listData);
     this.addApp.reset();
    })
}

deleteData(id:any){
  this.app.deleteData(id).subscribe((res:any)=>{
    this.getDat();
    this.alert1=true;

  });

  }

  editData(id:any){

    this.app.getDataById(id).subscribe((res:any)=>{
       let editValue=res;  
        this.dataId=editValue.id; 
       this.addApp.patchValue({  
         name : editValue.name,
         gender :editValue.Gender,
         native : editValue.native,
         contact : editValue.contact,
         Email : editValue.Email

       })

    });
    this.name="update"  
  }
  updateData(){
    console.log(this.addApp.value)
    this.dataId; 
    this.app.updateData(this.addApp.value,this.dataId).subscribe((res:any)=>{
      this.getDat();
    this.addApp.reset();
  
    });
  }

  // public delete() {
  //   this.deteteService
  //     .confirm('Do you really want to delete this task?')
  //     .then((confirmed: any) => console.log('User confirmed:', confirmed))
  //     .catch(() =>
  //       console.log(
  //         'User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'
  //       )
  //     );
  save(){
    this.currentItem=this.title2;
   
  }  
}


