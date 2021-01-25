import { Component, OnInit } from '@angular/core';
import { ViajeroService} from '../../services/viajero.service';
import { Global } from '../../services/global';
import { Viajero } from '../../models/viajero';
import { ActivatedRoute,Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-editar-viajero',
  templateUrl: '../agregar-viajero/agregar-viajero.component.html',
  styleUrls: ['../agregar-viajero/agregar-viajero.component.css'],
  providers: [ViajeroService]
})
export class EditarViajeroComponent implements OnInit {

  public viajero: Viajero;
  public status: string;
  public url: string;

  public agregado:number;

  public paises: number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];
  public ciudades: number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48];


  constructor(
    private _viajeroService: ViajeroService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.url = Global.url;
    this.viajero = new Viajero(0,'','','','',new Date(),'',0,0);
  }
  ngOnInit(){
    this._route.params.subscribe(params =>{
      let id = params.id;

      this.getViajero(id);
    });
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

  getViajero(id){
    this._viajeroService.getviajero(id).subscribe(
      response =>{
        console.log(response);
        this.viajero = response[0];
        console.log(this.viajero);
      },
      error =>{
        console.log(<any> error)
      }
    )
  }

  onSubmit(){
    this.viajero.edw_ciudad_edw_pais_id_pais=this.formPais.value.pais;
    this.viajero.edw_ciudad_id_ciudad=this.formCiudad.value.ciudad;
    this._viajeroService.updateViajero(this.viajero).subscribe(
      response=>{
        if(response){
          this._router.navigate(['mostrarViajeros']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
