import { Component, OnInit } from '@angular/core';
import { SocioServiceService } from '../../services/socio-service.service';
import { Proveedor } from '../../models/proveedor';
import { Global } from '../../services/global';

@Component({
  selector: 'app-agregar-asociacion',
  templateUrl: './agregar-asociacion.component.html',
  styleUrls: ['./agregar-asociacion.component.css'],
  providers:[SocioServiceService]
})
export class AgregarAsociacionComponent implements OnInit {
  public url:string
  public status:string;
  public proveedor: Proveedor;
  public id_agencia: 0;
  public numero_documento:0;
  constructor(
    private _proveedorService: SocioServiceService
  ) { 
    this.url=Global.url;
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.id_agencia);
    console.log(this.numero_documento);
    this._proveedorService.getSocio(this.numero_documento).subscribe(
      response=>{
        this.proveedor = response[0];
        this.agregarAsociacion(this.proveedor);
      },
      error=>{
        console.log(<any>error)
      }
    );
  }

  agregarAsociacion(proveedor){
    this._proveedorService.saveAsociation(this.id_agencia,proveedor).subscribe(
      response=>{
        console.log("agregada la asociacion");
        this.status="success";
      },
      error=>{
        this.status="failed";
        console.log(<any>error);
      }
    );
  }




}
