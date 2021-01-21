import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css'],
  providers:[ClienteService]
})
export class AgregarClienteComponent implements OnInit {
  public cliente: Cliente;
  public status: string

  constructor(
    private _clienteService: ClienteService
  ) {
    this.cliente= new Cliente(0,'','','','',0);
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.cliente);
    this._clienteService.saveCliente(this.cliente).subscribe(
      response =>{
        if(response){
          this.status='success';
        }else{
          this.status='failed';
        }
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

}
