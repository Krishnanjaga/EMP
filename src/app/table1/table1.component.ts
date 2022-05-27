import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {
  firstnum1!: number;
  firstnum2!:number; 
  add!: number;
  // sub!:number;
  // div!:number;
  // mul!:number;
  str = 'string';
  str1:any;
  oo = '';
  ss=false;
  

  ngOnInit(): void {

    
  }
  added(){
    this.add=this.firstnum1+this.firstnum2;
  }
  sub1(){
    this.add=this.firstnum1-this.firstnum2;
  }
  div1(){
    this.add=this.firstnum1/this.firstnum2;
  }
  mul1(){
    this.add=this.firstnum1*this.firstnum2;
    
  }
  mul2(){
    if(this.ss===false){
      this.ss=true
      this.str1=this.str
    }
    else{
      this.ss=false;
      this.str1=this.oo
    }
  
  }
  one(){
    this.firstnum1=1;
    
  }  
  two(){
    this.firstnum2=2;

  }  
}
