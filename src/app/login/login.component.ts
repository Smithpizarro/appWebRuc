import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public year: String = new Date().getFullYear().toString();
  public usuario: Usuario = new Usuario;
  registerForm: FormGroup;
  usernameControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);
  public errorMessage: String;
  submitted = false;
  constructor(private router: Router ,private fb: FormBuilder , private modalService: NgbModal) {

    this.registerForm = this.fb.group({
      'usernameControl': this.usernameControl,
      'passwordControl': this.passwordControl
    });
   }

  ngOnInit() {

  }
  

  public login(){
    //service
   /* this.service.getToken(this.usuario).subscribe(
      usuario=>{
      console.log("usuario",usuario); */
      this.redirectLogin();
   /*   },
      error=>{
      this.errorMessage=<any>error;
      console.log("error login",this.errorMessage);
      this.router.navigate(['/mlogin']);
      }
      ); */
  
      }
    
      public redirectLogin() {
        this.router.navigate(['/minicio/inicio']);
        }  
}
