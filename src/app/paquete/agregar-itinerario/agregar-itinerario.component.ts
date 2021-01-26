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
  public id_agencia:any;
  public id_paquete:number;
  public ciudades = <any>[];
  public agregado:number;
  public itinerario: Itinerario;

  constructor(
    private _paqueteService: PaqueteService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.id_agencia = this._route.snapshot.params.id1;
    this.id_paquete = this._route.snapshot.params.id2
    console.log(this.id_agencia,this.id_paquete);
    this.getCiudades();
    this.agregado =0;
    this.itinerario = new Itinerario(0,0,0,0,0,0);
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
    this.itinerario.edw_ciudad_id_ciudad=this.formCiudad.value.ciudad;
    this.itinerario.edw_paquete_edw_agencia_id_agencia=this.id_agencia;
    this.itinerario.edw_paquete_id_paquete=this.id_paquete;
    console.log(this.itinerario);
    this._paqueteService.saveItinerario(this.itinerario).subscribe(
      response=>{
        this.agregado=1;

      },
      error=>{
        this.agregado=2;
      }
    );
  }
}









