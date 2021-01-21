import { Component, OnInit } from '@angular/core';
import { AgenciaService} from '../../services/agencia.service';
import { Global } from '../../services/global';
import { Agencia } from '../../models/agencia';
import { ActivatedRoute,Router, Params } from '@angular/router';

@Component({
  selector: 'app-modificar-agencia',
  templateUrl: './modificar-agencia.component.html',
  styleUrls: ['./modificar-agencia.component.css'],
  providers:[AgenciaService]
})
export class ModificarAgenciaComponent implements OnInit {

  public url:string;
  public agencia: Agencia;

  constructor(
    private _agenciaService: AgenciaService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = Global.url;
  }

  ngOnInit(){
    this._route.params.subscribe(params =>{
      let id = params.id;

      this.getAgencia(id);
    });

  }


  getAgencia(id){
    this._agenciaService.getAgencia(id).subscribe(
      response =>{
        console.log(response);
        this.agencia= response[0];
        console.log(this.agencia);
      },
      error =>{
        console.log(<any> error)
      }
    )
  }

  deleteAgencia(id){
    this._agenciaService.deleteAgencia(id).subscribe(
      response =>{
        console.log(response);
        if(response){
          this._router.navigate(['mostrarAgencias']);
        }
      },
      error =>{
        console.log(<any>error);
      }
    ) 
  }

}
