import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor';
import { Global } from '../services/global';

@Injectable()
export class SocioServiceService {
  public url:string;

  constructor(
    private _http: HttpClient
  ){
    this.url = Global.url;
  }

  saveSocio(proveedor: Proveedor): Observable<any>{
    let params = JSON.stringify(proveedor);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'newProveedor',params,{headers: headers});
  }

  getSocios(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'proveedores',{headers: headers});
  }

  getSocio(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'proveedoresSocios/'+id,{headers: headers});    
  } 

  deleteSocio(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'deleteProveedor/'+id,{headers: headers});        
  }

  updateSocio(proveedor): Observable<any>{
    let params = JSON.stringify(proveedor);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+'updatePais/'+proveedor.numero_documento_1,params,{headers: headers});             
  }

  saveAsociation(id,proveedor): Observable<any>{
    console.log(proveedor);
    let params = JSON.stringify(proveedor);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'asociarProveedor/'+id,params,{headers: headers});
  }

  getAsociaciones(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'proveedor/'+id,{headers: headers});
  }

  deleteAsociacion(id_agencia,id_resultado): Observable<any>{
    let resultado = id_agencia+' '+id_resultado;
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'desasociarProveedor/'+resultado,{headers: headers});
  }
}
