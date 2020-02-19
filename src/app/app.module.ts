import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioModule } from './inicio/inicio.module';
import { IconsModule } from './icons/icons.module';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    InicioModule,
    IconsModule,
    HttpClientModule,
  ],
  exports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
