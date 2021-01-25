import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Viajero } from '../../models/viajero';
import { ViajeroService } from '../../services/viajero.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
   


@Component({
  selector: 'app-agregar-viajero',
  templateUrl: './agregar-viajero.component.html',
  styleUrls: ['./agregar-viajero.component.css'],
  providers: [ViajeroService]
})
export class AgregarViajeroComponent implements OnInit {
  public viajero:Viajero;
  public agregado:number;

  public paises: number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];
  public ciudades: number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];

  constructor(
    private _viajeroService: ViajeroService
  ){
    this.agregado =0;
    this.viajero = new Viajero(0,'','','','',new Date(),'',0,0);
  }
  ngOnInit(): void {
  }
   
  formPais = new FormGroup({
    pais: new FormControl(0, Validators.required)
  });

  formCiudad = new FormGroup({
    ciudad: new FormControl(0, Validators.required)
  })
   
  get f(){
    return this.formPais.controls;
  }

  get f2(){
    return this.formCiudad.controls;
  }
   
  onSubmit(){
    this.viajero.edw_ciudad_edw_pais_id_pais=this.formPais.value.pais;
    this.viajero.edw_ciudad_id_ciudad=this.formCiudad.value.ciudad;
    console.log(this.viajero);
    this._viajeroService.saveviajero(this.viajero).subscribe(
      response=>{
        this.agregado=1;

      },
      error=>{
        this.agregado=2;
      }
    );
  }
   
}

