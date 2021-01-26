import { Component, OnInit } from '@angular/core';
import { Paquete } from '../../models/paquete';
import { PaqueteService } from '../../services/paquete.service';
import { ActivatedRoute,Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-seleccionar-paquete',
  templateUrl: './seleccionar-paquete.component.html',
  styleUrls: ['./seleccionar-paquete.component.css'],
  providers: [PaqueteService]
})
export class SeleccionarPaqueteComponent implements OnInit {

  public paquetes = <any>[];
  public agregado:number;
  public compra: Paquete;

  constructor(
    private PaqueteService: PaqueteService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.getpaquetes();
    this.agregado =0;
  }

  formPaquete = new FormGroup({
    paquete: new FormControl(0, Validators.required)
  })

  get f(){
    return this.formPaquete.controls;
  }

  getpaquetes(){
    this.PaqueteService.getCompraPaquetes().subscribe(
      response =>{
        response.forEach(element => {
          
        });(element => {
          this.paquetes.push(element.id_paquete);
        });
        console.log(this.paquetes);
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  onSubmit(){

  }








}
