import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { last } from 'rxjs';


@Injectable({
    providedIn:'root'
})
export class AppService {

 

  // url = "http://localhost:3000/companyid";


  constructor(private http: HttpClient) {}
  
// male(data: any){
//   return this.http.post('http://localhost:3000/company/',data); 
// }
 
  saveApp(data: any){
    console.log(data);
    return this.http.post('http://localhost:3000/register/',data); 

  }
  getData(){
    console.log();
    return this.http.get('http://localhost:3000/register/'); 
  }
  

  saveAp(data: any){
    console.log(data);
    return this.http.post('http://localhost:3000/company/',data); 

  }
  getDat(){
    return this.http.get('http://localhost:3000/company/'); 
  }

  deleteData(id:any){
    console.log(id);
    return this.http.delete('http://localhost:3000/company/'+id); 
  }

  getDataById(id:any){
   return this.http.get('http://localhost:3000/company/'+id);  
  }

  updateData(data:any,id:any){
    return this.http.put('http://localhost:3000/company/'+id,data);
  }

}
  
