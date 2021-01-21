import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agencia } from '../models/agencia';
import { Global } from '../services/global';


@Injectable()
export class AgenciaService {

  public url:string;

  constructor(
    private _http: HttpClient
  ){
    this.url = Global.url;
  }

  saveAgencia(agencia: Agencia): Observable<any>{
    let params = JSON.stringify(agencia);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'newAgencia',params,{headers: headers});
  }

  getAgencias(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'agencias',{headers: headers});
  }

  getAgencia(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'agencias/'+id,{headers: headers});    
  } 

  deleteAgencia(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'deleteAgencia/'+id,{headers: headers});        
  }

  updateAgencia(agencia): Observable<any>{
    let params = JSON.stringify(agencia);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+'updateAgencia/'+agencia.id_agencia,{headers: headers});             
  }

  saveAsociation(id,agencia): Observable<any>{
    console.log(agencia);
    let params = JSON.stringify(agencia);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'asociarAgencia/'+id,params,{headers: headers});
  }

  getAsociaciones(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'agenciasSocios/'+id,{headers: headers});
  }

  deleteAsociacion(id_agencia_1,id_agencia_2): Observable<any>{
    let resultado = id_agencia_1+' '+id_agencia_2;
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'desasociarAgencia/'+resultado,{headers: headers});
  }


  reporte(){
    let body = {
      "template": {"name":"Socios"}
    };
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post('http://localhost:5488/api/report',body,{ responseType: 'blob' });
  }



}
