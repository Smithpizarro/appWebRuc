import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule ,ReactiveFormsModule }   from '@angular/forms'; 
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from '../login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule ,FormsModule,ReactiveFormsModule,NgbModule
  ],
  exports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class LoginModule { }
