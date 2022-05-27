import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form/form.component';
import { KjComponent } from './kj/kj.component';
import { ListComponent } from './list/list.component';
import { Table1Component } from './table1/table1.component';
import { TRComponent } from './tr/tr.component';
import { AddComponent } from './add/add.component';
import { AgriComponent } from './agri/agri.component';
import { PriceComponent } from './price/price.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoconutComponent } from './coconut/coconut.component';

const routes: Routes = [
 {path:'',pathMatch:'full',redirectTo:'/tr/kj'},
{path:'tr',component:TRComponent},
 {path:'kj',component:KjComponent},
 {path:'form',component:FormComponent},
  {path:'table1',component:Table1Component},
  {path:'list',component:ListComponent},
  {path:'add',component:AddComponent},
  {path:'agri',component:AgriComponent},
  {path:'price',component:PriceComponent},
  {path:'coconut', component:CoconutComponent},
  {path: 'register',component:LoginComponent},
  { path: 'login',component: RegisterComponent},
  {path:'**',component:TRComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
