import { Component, OnInit } from '@angular/core';
import { ClienteService} from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';


@Component({
  selector: 'app-mostrar-cliente',
  templateUrl: './mostrar-cliente.component.html',
  styleUrls: ['./mostrar-cliente.component.css'],
  providers:[ClienteService]
})
export class MostrarClienteComponent implements OnInit {
  public id_agencia: number;
  public clientes: Cliente[];
  public busqueda:number;
  public status:string;
  public status2:string;
  constructor(
    private _clienteService: ClienteService
  ){ }

  ngOnInit(): void {
    this.busqueda = 0;
  }


  onSubmit(form){
    console.log(this.id_agencia);
    if(this.id_agencia != undefined){
    this._clienteService.getClientes(this.id_agencia).subscribe(
      response =>{
        if(response){
          this.clientes = response;
          console.log(response);
          this.busqueda=1;
          this.status='success';
        }else{
          this.status='failed';
        }
      },
      error =>{
        this.status='failed';
      });
    } 
  } 

  delete(num_registro){
    this._clienteService.deleteRegistro(num_registro).subscribe(
      response=>{
        if(response){
          this.status2="success";
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }



}
