import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css'],
  providers:[ClienteService]
})
export class RegistrarClienteComponent implements OnInit {

  public id_agencia: number;
  public id_cliente: number;
  public cliente: Cliente;
  public status: string

  constructor(
    private _clienteService: ClienteService
  ) {

  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.id_cliente);
    this._clienteService.getCliente(this.id_cliente).subscribe(
      response =>{
        if(response){
          this.cliente=response[0];
          this.resgistrar(this.cliente);
        }else{
          this.status='failed';
        }
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

  resgistrar(cliente){
    this._clienteService.resgistrarCliente(cliente,this.id_agencia).subscribe(
      response=>{
        this.status='success';
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
