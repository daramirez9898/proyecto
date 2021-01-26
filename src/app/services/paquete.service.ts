import { Injectable } from '@angular/core';
import { Paquete } from '../models/paquete';
import { Global } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class PaqueteService {

  public url:string;

  constructor(
    private _http: HttpClient
  ){
    this.url = Global.url;
  }
  
  savePaquete(paquete:Paquete){
    let params = JSON.stringify(paquete);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'nuevoPaquete',params,{headers: headers});
  }

  saveItinerario(itinerario){
    let params = JSON.stringify(itinerario);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'nuevoItinerario',params,{headers: headers});
  }

  saveAtraccion(orden_de_visita,atraccion,paquete){
    let ayuda = {orden:orden_de_visita,id_atraccion:atraccion,id_paquete:paquete};
    console.log(ayuda);
    let params = JSON.stringify(ayuda);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'agregarAtraccion',params,{headers: headers});
  }

  savePrecio(id_paquete,costo){
    let params = JSON.stringify({
      precio:costo,
      paquete:id_paquete
    });
    console.log(params);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+'updatePrecio/'+id_paquete,params,{headers: headers});

  }

  getCiudades(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'ciudades',{headers: headers});
  }

  getAtracciones(id): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'atraccionesPaquete/'+id,{headers: headers});
  }





}
