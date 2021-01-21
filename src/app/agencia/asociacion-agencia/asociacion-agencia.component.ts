import { Component, OnInit } from '@angular/core';
import { AgenciaService } from '../../services/agencia.service';

@Component({
  selector: 'app-asociacion-agencia',
  templateUrl: './asociacion-agencia.component.html',
  styleUrls: ['./asociacion-agencia.component.css'],
  providers:[AgenciaService]
})
export class AsociacionAgenciaComponent implements OnInit {
  public url:string;
  public status:string;
  public id_agencia_1:number;
  public resultados:any;
  public busqueda:number;

  constructor(
    private _agenciaService:AgenciaService
  ) { 
    this.busqueda=0
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.id_agencia_1);
    if(this.id_agencia_1 != undefined){
    this._agenciaService.getAsociaciones(this.id_agencia_1).subscribe(
      response =>{
        if(response){
          console.log(response);
          this.resultados=response;
          this.busqueda=1;
          this.status='success';
        }else{
          this.status='failed';
        }
      },
      error =>{
        this.status='failed';
      }
    )
  }
}
  delete(id_agencia_2){
    console.log(this.id_agencia_1,id_agencia_2);
    this._agenciaService.deleteAsociacion(this.id_agencia_1,id_agencia_2).subscribe(
      response=>{
        this.status='success';
      },
      error=>{
        console.log(<any>error);
      }
    );
  }


}
