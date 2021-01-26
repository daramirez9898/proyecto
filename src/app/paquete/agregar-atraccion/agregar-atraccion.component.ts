import { Component, OnInit } from '@angular/core';
import { Atraccion } from '../../models/atraccion';
import { PaqueteService } from '../../services/paquete.service';
import { ActivatedRoute,Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-agregar-atraccion',
  templateUrl: './agregar-atraccion.component.html',
  styleUrls: ['./agregar-atraccion.component.css'],
  providers:[PaqueteService]
})
export class AgregarAtraccionComponent implements OnInit {

  public atracciones = <any>[];
  public agregado:number;
  public atraccion: Atraccion;
  public id_paquete:number;
  public orden_de_visita:number;

  constructor(
    private _paqueteService: PaqueteService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.id_paquete = this._route.snapshot.params.id;

    this.atraccion = new Atraccion(0,'','',0,0);
    this.getAtracciones();
  }

  formAtraccion = new FormGroup({
    atraccion: new FormControl(0, Validators.required)
  })

  get f(){
    return this.formAtraccion.controls;
  }

  getAtracciones(){
    this._paqueteService.getAtracciones(this.id_paquete).subscribe(
      response =>{
        console.log(response);
        response.forEach(element => {
          this.atracciones.push(element);
        });
        console.log(this.atracciones);
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

 

  onSubmit(){
    this._paqueteService.saveAtraccion(this.orden_de_visita,this.formAtraccion.value.atraccion,this.id_paquete).subscribe(
      response=>{
        this.agregado=1;

      },
      error=>{
        this.agregado=2;
      }
    
    );
  }
  
  



}

