import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { Global } from '../../services/global';
import { ActivatedRoute,Router, Params } from '@angular/router';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css'],
  providers: [ClienteService]
})
export class ModificarClienteComponent implements OnInit {

  public url:string;
  public cliente: any;

  constructor(
    private _clienteService: ClienteService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = Global.url;
  }

  ngOnInit(){
    this._route.params.subscribe(params =>{
      let id = params.id;

      this.getCliente(id);
    });

  }


  getCliente(id){
    this._clienteService.getCliente(id).subscribe(
      response =>{
        console.log(response);
        this.cliente= response[0];
        console.log(this.cliente);
      },
      error =>{
        console.log(<any> error)
      }
    )
  }

  deleteCliente(id){
    this._clienteService.deleteCliente(id).subscribe(
      response =>{
        console.log(response);
        if(response){
          this._router.navigate(['mostrarClientes']);
        }
      },
      error =>{
        console.log(<any>error);
      }
    ) 
  }

}
