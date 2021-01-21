import { Component, OnInit } from '@angular/core';
import { AgenciaService } from '../../services/agencia.service';
import { Agencia } from '../../models/agencia';
import { Global } from '../../services/global';
import { provideRoutes } from '@angular/router';

@Component({
  selector: 'app-agregar-asociacion-agencia',
  templateUrl: './agregar-asociacion-agencia.component.html',
  styleUrls: ['./agregar-asociacion-agencia.component.css'],
  providers:[AgenciaService]
})
export class AgregarAsociacionAgenciaComponent implements OnInit {

  public url:string
  public status:string;
  public agencia: Agencia;
  public id_agencia: number;
  public id_agencia_2:number;
  constructor(
    private _agenciaService: AgenciaService
  ) { 
    this.url=Global.url;
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.id_agencia);
    console.log(this.id_agencia_2);
    this._agenciaService.getAgencia(this.id_agencia_2).subscribe(
      response=>{
        this.agencia = response[0];
        this.agregarAsociacion(this.agencia);
      },
      error=>{
        console.log(<any>error)
      }
    );
  }

  agregarAsociacion(agencia){
    this._agenciaService.saveAsociation(this.id_agencia,agencia).subscribe(
      response=>{
        console.log("agregada la asociacion");
        this.status="success";
      },
      error=>{
        this.status="failed";
        console.log(<any>error);
      }
    );
  }
}