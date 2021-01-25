import { Component, OnInit } from '@angular/core';
import { ViajeroService } from '../../services/viajero.service';
import { Viajero } from '../../models/viajero';

@Component({
  selector: 'app-registrar-viajero',
  templateUrl: './registrar-viajero.component.html',
  styleUrls: ['./registrar-viajero.component.css'],
  providers: [ViajeroService]
})
export class RegistrarViajeroComponent implements OnInit {

  public id_agencia: number;
  public id_viajero: number;
  public viajero: Viajero;
  public status: string

  constructor(
    private _viajeroService: ViajeroService
  ) {

  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.id_viajero);
    this._viajeroService.getviajero(this.id_viajero).subscribe(
      response =>{
        if(response){
          this.viajero=response[0];
          this.resgistrar(this.viajero);
        }else{
          this.status='failed';
        }
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

  resgistrar(viajero){
    this._viajeroService.resgistrarViajero(viajero,this.id_agencia).subscribe(
      response=>{
        this.status='success';
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
