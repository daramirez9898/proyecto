import { Component, OnInit } from '@angular/core';
import { ClienteService} from '../../services/cliente.service';
import { Global } from '../../services/global';
import { Cliente } from '../../models/cliente';
import { ActivatedRoute,Router, Params } from '@angular/router';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: '../agregar-cliente/agregar-cliente.component.html',
  styleUrls: ['../agregar-cliente/agregar-cliente.component.css'],
  providers: [ClienteService]
})
export class EditarClienteComponent implements OnInit {

  public cliente: Cliente;
  public status: string;
  public url: string;

  constructor(
    private _clienteService: ClienteService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.url = Global.url;
    this.cliente = new Cliente(0,'','','','',0);
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
        this.cliente = response[0];
        console.log(this.cliente);
      },
      error =>{
        console.log(<any> error)
      }
    )
  }

  onSubmit(form){
    this._clienteService.updateCliente(this.cliente).subscribe(
      response=>{
        if(response){
          this._router.navigate(['mostrarClientes']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
