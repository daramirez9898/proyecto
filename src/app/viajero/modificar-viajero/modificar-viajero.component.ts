import { Component, OnInit } from '@angular/core';
import { ViajeroService } from '../../services/viajero.service';
import { Global } from '../../services/global';
import { ActivatedRoute,Router, Params } from '@angular/router';
@Component({
  selector: 'app-modificar-viajero',
  templateUrl: './modificar-viajero.component.html',
  styleUrls: ['./modificar-viajero.component.css'],
  providers: [ViajeroService]
})
export class ModificarViajeroComponent implements OnInit {

  public url:string;
  public viajero: any;

  constructor(
    private _viajeroService: ViajeroService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = Global.url;
  }

  ngOnInit(){
    this._route.params.subscribe(params =>{
      let id = params.id;

      this.getViajero(id);
    });

  }


  getViajero(id){
    this._viajeroService.getviajero(id).subscribe(
      response =>{
        console.log(response);
        this.viajero= response[0];
        console.log(this.viajero);
      },
      error =>{
        console.log(<any> error)
      }
    )
  }

  deleteViajero(id){
    this._viajeroService.deleteViajero(id).subscribe(
      response =>{
        console.log(response);
        if(response){
          this._router.navigate(['mostrarViajeros']);
        }
      },
      error =>{
        console.log(<any>error);
      }
    ) 
  }

}
