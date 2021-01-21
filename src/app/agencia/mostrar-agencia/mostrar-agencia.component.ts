import { Component, OnInit } from '@angular/core';
import { AgenciaService} from '../../services/agencia.service';
import { Agencia } from '../../models/agencia';


@Component({
  selector: 'app-mostrar-agencia',
  templateUrl: './mostrar-agencia.component.html',
  styleUrls: ['./mostrar-agencia.component.css'],
  providers:[AgenciaService]
})
export class MostrarAgenciaComponent implements OnInit {

  public agencias: Agencia[]
  constructor(
    private _agenciaService: AgenciaService
  ){ }

  ngOnInit(): void {
    this.getAgencias();
  }

  getAgencias(){
    this._agenciaService.getAgencias().subscribe(
      response =>{
        this.agencias = response;
      },
      error=>{
        console.log(<any> error);
      }
    );
  }

}
