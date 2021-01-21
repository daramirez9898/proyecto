import { Component, OnInit } from '@angular/core';
import { SocioServiceService} from '../../services/socio-service.service';


@Component({
  selector: 'app-asociacion',
  templateUrl: './asociacion.component.html',
  styleUrls: ['./asociacion.component.css'],
  providers:[SocioServiceService]
})
export class AsociacionComponent implements OnInit {
  public url:string;
  public status:string;
  public id_agencia:number;
  public resultados:any;
  public busqueda:number;

  constructor(
    private _proveedorService:SocioServiceService
  ) { 

  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.id_agencia);
    this._proveedorService.getAsociaciones(this.id_agencia).subscribe(
      response =>{
        if(response){
          this.resultados=response;
          this.busqueda=1;
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
  deleteAsociacion(id_agencia,id_proveedor){
    console.log(id_agencia,id_proveedor);
    this._proveedorService.deleteAsociacion(id_agencia,id_proveedor).subscribe(
      response=>{
        this.status='success';
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
