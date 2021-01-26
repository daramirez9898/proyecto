import { Component, OnInit } from '@angular/core';
import { Itinerario } from '../../models/itinerario';
import { PaqueteService } from '../../services/paquete.service';
import { ActivatedRoute,Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-agregar-itinerario',
  templateUrl: './agregar-itinerario.component.html',
  styleUrls: ['./agregar-itinerario.component.css'],
  providers: [PaqueteService]
})
export class AgregarItinerarioComponent implements OnInit {

  public ciudades = <any>[];
  public agregado:number;
  public itinerio: Itinerario;

  constructor(
    private _paqueteService: PaqueteService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.getCiudades();
    this.agregado =0;
  }

  formCiudad = new FormGroup({
    ciudad: new FormControl(0, Validators.required)
  })

  get f(){
    return this.formCiudad.controls;
  }

  getCiudades(){
    this._paqueteService.getCiudades().subscribe(
      response =>{
        response.forEach(element => {
          this.ciudades.push(element.id_ciudad);
        });
        console.log(this.ciudades);
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  onSubmit(){

  }








}
