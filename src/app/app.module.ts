import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app.routing'; 

import { IndexModule } from './index/index.module';

import {UsersService} from './services/users.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    IndexModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
