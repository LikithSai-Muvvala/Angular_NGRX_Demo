import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { EmployeeReducer } from './employee.reducer';

@NgModule({
  imports:      [ BrowserModule, FormsModule, StoreModule.forRoot({todos: EmployeeReducer}) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
