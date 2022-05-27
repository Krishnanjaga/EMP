import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  hello!:number;
  value1:number=50;
   send!:number;
  listData :any = [];
  dataId:any;
  yes:boolean=true;
  
  constructor(private app:AppService) { }

  ngOnInit(): void {
  }

  submit(){
this.send=this.value1*this.hello;
this.app.getDat().subscribe((res:any)=>{
  // console.log('resbdf',res)
  this.listData .push(res[res.length-2]);
  console.log('res',res[res.length-1])
  console.log('list',this.listData)
})
  }

  editData(id:any){

    this.app.getDataById(id).subscribe((res:any)=>{
       this.dataId=res;  

    });
  }
  save(){
if(this.yes === false){
  this.yes=true
}
else{
  this.yes=false
}
  }
}
