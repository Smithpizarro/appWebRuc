import {  Cliente } from "./cliente";
import { Paginacion } from "./paginacion";

export class ClienteCollectionModel{
    public listaCliente:Cliente[];
    public paginacion:Paginacion;
    constructor(){
        this.paginacion = new Paginacion;
    }
    }