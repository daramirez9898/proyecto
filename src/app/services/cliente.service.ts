import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { Global } from '../services/global';


@Injectable()
export class ClienteService {

  public url:string;

  constructor(
    private _http: HttpClient
  ){
    this.url = Global.url;
  }

  saveCliente(cliente: Cliente): Observable<any>{
    let params = JSON.stringify(cliente);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'newCliente',params,{headers: headers});
  }
  resgistrarCliente(cliente:Cliente,id:number): Observable<any>{
    let params = JSON.stringify(cliente);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'registroCliente/'+id,params,{headers: headers});
  }
  deleteRegistro(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'eliminarRegistro/'+id,{headers: headers}); 
  }

  getClientes(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'clientes/'+id,{headers: headers});
  }

  getCliente(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'cliente/'+id,{headers: headers});    
  } 

  deleteCliente(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'deleteCliente/'+id,{headers: headers});        
  }

  updateCliente(cliente): Observable<any>{
    let params = JSON.stringify(cliente);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+'updateCliente/'+cliente.id_cliente,params,{headers: headers});             
  }
}
