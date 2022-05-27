import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TRComponent } from './tr/tr.component';
import { KjComponent } from './kj/kj.component';
import { FormComponent } from './form/form.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Table1Component } from './table1/table1.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import{ HttpClientModule }from'@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TodoComponent } from './todo/todo.component';
import { AgriComponent } from './agri/agri.component';
import { PriceComponent } from './price/price.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoconutComponent } from './coconut/coconut.component';

@NgModule({
  declarations: [
    AppComponent,
    TRComponent,
    KjComponent,
    FormComponent,
    Table1Component,
    ListComponent,
    AddComponent,
    TodoComponent,
    AgriComponent,
    PriceComponent,
    LoginComponent,
    RegisterComponent,
    CoconutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
    HttpClientModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
      
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

