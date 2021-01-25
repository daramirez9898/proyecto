import { Component, OnInit } from '@angular/core';
import { ViajeroService} from '../../services/viajero.service';
import { Viajero } from '../../models/viajero';

@Component({
  selector: 'app-mostrar-viajeros',
  templateUrl: './mostrar-viajeros.component.html',
  styleUrls: ['./mostrar-viajeros.component.css'],
  providers: [ViajeroService]
})
export class MostrarViajerosComponent implements OnInit {

  public id_agencia: number;
  public viajeros: Viajero[];
  public busqueda:number;
  public status:string;
  public borrado:number;
  constructor(
    private _viajeroService: ViajeroService
  ){ }

  ngOnInit(): void {
    this.busqueda = 0;
    this.borrado=0;
  }


  onSubmit(form){
    console.log(this.id_agencia);
    if(this.id_agencia != undefined){
    this._viajeroService.getViajeros(this.id_agencia).subscribe(
      response =>{
        if(response){
          this.viajeros = response;
          console.log(response);
          this.busqueda=1;
          this.status='success';
        }else{
          this.status='failed';
        }
      },
      error =>{
        this.status='failed';
      });
    } 
  } 

  deleteRegistro(numunico){
    console.log(numunico);
    this._viajeroService.deleteRegistro(numunico).subscribe(
      response=>{
        if(response){
          this.borrado=1;
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
