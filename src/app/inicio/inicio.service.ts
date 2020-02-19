import { Injectable } from '@angular/core';
import {HttpRequest,HttpHeaders,HttpResponse, HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError,map,tap} from 'rxjs/operators';

import { environment } from 'src/environments/environment'
import { ClienteCollectionModel } from '../model/clienteCollectionModel';
import { Cliente } from '../model/cliente';
import { FormRucModel } from '../model/FormRucModel';


const httpOptions ={
  headers: new HttpHeaders(
                { 
                  'Content-Type': 'application/json' 
                }
              ) 
  };
@Injectable({
  providedIn: 'root'
})
export class InicioService {
  
  public servicioUrl = environment.APIEndpoint;
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
  
  public getCientesPagina(pagina:number):Observable<ClienteCollectionModel>{
    console.log("url=",this.servicioUrl+"/cliente/listarCliente/"+pagina);
    return this.http.get<ClienteCollectionModel>(this.servicioUrl+"/cliente/listarCliente/"+pagina,httpOptions).pipe(
      tap((lista:ClienteCollectionModel)=>
       console.log(lista)),
      catchError(this.handleError<ClienteCollectionModel>('getCliente'))
    );
  }
  
  public getFormRuc(ruc:string):Observable<FormRucModel>{
    console.log("url=",this.servicioUrl+"/rest/FormRuc/"+ruc);
    return this.http.get<FormRucModel>(this.servicioUrl+"/rest/FormRuc/"+ruc,httpOptions).pipe(
      tap((lista:FormRucModel)=>
       console.log(lista)),  
      catchError(this.handleError<FormRucModel>('getCliente'))
    );
  }

  public crearPersona(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.servicioUrl+"/cliente/createCliente",
    JSON.stringify(cliente), httpOptions).pipe(
    tap((cliente: Cliente) =>
    console.log(cliente.clienteId)),
    catchError(this.handleError<Cliente>('create'))
    ); }


}
