import { Injectable } from '@angular/core';
import { Viajero } from '../models/viajero';
import { Global } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ViajeroService {

  public url:string;

  constructor(
    private _http: HttpClient
  ){
    this.url = Global.url;
  }

  saveviajero(viajero: Viajero){
    let params = JSON.stringify(viajero);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'newViajero',params,{headers: headers});
  }

  resgistrarViajero(viajero:Viajero,id:number): Observable<any>{
    let params = JSON.stringify(viajero);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'registroViajeros/'+id,params,{headers: headers});
  }

  getviajero(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'viajero/'+id,{headers: headers});    
  } 

  deleteRegistro(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'deleteViajero/'+id,{headers: headers}); 
  }

  getViajeros(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'viajeros/'+id,{headers: headers});
  }

  deleteViajero(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'deleteViajero/'+id,{headers: headers});        
  }

  updateViajero(viajero): Observable<any>{
    let params = JSON.stringify(viajero);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+'updateViajero/'+viajero.id_viajero,params,{headers: headers});             
  }
}
