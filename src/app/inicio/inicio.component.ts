import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {InicioService}  from './inicio.service';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteCollectionModel } from '../model/clienteCollectionModel';
import { Paginacion } from '../model/paginacion';
import { FormRucModel } from '../model/FormRucModel';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers : [InicioService]
})
export class InicioComponent implements OnInit {
 
  public clientecollection : ClienteCollectionModel= new ClienteCollectionModel();
  public formRuc : FormRucModel= new FormRucModel();
  public pages = 1;
  private errorMessage: String;
  constructor(public service: InicioService, public ngbmodal: NgbModal ) { 
    this.clientecollection.paginacion = new Paginacion;
  }

  ngOnInit() {
    this.getCliente(this.pages);
  }

  loadPage(page: number) {
    
    if (page !== this.pages) {
      this.pages = page;
       }
   this.getCliente(this.pages);
  }
  

  public getCliente(pagina:number){
    this.service.getCientesPagina(pagina).subscribe(
      clientecollection=>{
    console.log(clientecollection);
    this.clientecollection=clientecollection;
    },
    error=>{this.errorMessage=<any>error;}
    );
    }

    public added(ruc){

      console.log("rucc " + ruc);
      this.service.getFormRuc(ruc).subscribe(
        formRuc=>{
      console.log(formRuc);
      this.formRuc=formRuc;
     },
      error=>{this.errorMessage=<any>error;}
      );
    }

    public delete(idPersona:number){

    }
}
