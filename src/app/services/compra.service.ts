import { Injectable } from '@angular/core';
import { Compra } from '../models/compra';
import { Global } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class Compraservice {

  public url:string;

  constructor(
    private _http: HttpClient
  ){
    this.url = Global.url;
  }

  getCompraPaquetes(){
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'paquetesCompra',{headers: headers});
  }

  comprarPaquete(compra:Compra,id:number): Observable<any>{
    let params = JSON.stringify(compra);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'pago/'+id,params,{headers: headers});
  }

  recibo(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'viajero/'+id,{headers: headers});    
  } 

}
