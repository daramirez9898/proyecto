import { Component, OnInit } from '@angular/core';
import { AgenciaService} from '../../services/agencia.service';
import { Global } from '../../services/global';
import { Agencia } from '../../models/agencia';
import { ActivatedRoute,Router, Params } from '@angular/router';

@Component({
  selector: 'app-editar-agencia',
  templateUrl: '../agregar-agencia/agregar-agencia.component.html',
  styleUrls: ['../agregar-agencia/agregar-agencia.component.css'],
  providers:[AgenciaService]
})
export class EditarAgenciaComponent implements OnInit {

  public agencia: Agencia;
  public status: string;
  public url: string;

  constructor(
    private _agenciaService: AgenciaService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
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

  onSubmit(form){
    this._agenciaService.updateAgencia(this.agencia).subscribe(
      response=>{
        if(response){
          this._router.navigate(['mostrarAgencias']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
