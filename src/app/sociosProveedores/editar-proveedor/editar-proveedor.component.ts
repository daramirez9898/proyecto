import { Component, OnInit } from '@angular/core';
import { SocioServiceService} from '../../services/socio-service.service';
import { Global } from '../../services/global';
import { Proveedor } from '../../models/proveedor';
import { ActivatedRoute,Router, Params } from '@angular/router';


@Component({
  selector: 'app-editar-proveedor',
  templateUrl: '../agregar-socio/agregar-socio.component.html',
  styleUrls: ['../agregar-socio/agregar-socio.component.css'],
  providers:[SocioServiceService]
})
export class EditarProveedorComponent implements OnInit {
 
  public proveedor: Proveedor;
  public status: string;
  public url: string;

  constructor(
    private _proveedorService: SocioServiceService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.url = Global.url;
  }
  ngOnInit(){
    this._route.params.subscribe(params =>{
      let id = params.id;

      this.getProveedor(id);
    });
  }

  getProveedor(id){
    this._proveedorService.getSocio(id).subscribe(
      response =>{
        console.log(response);
        this.proveedor= response[0];
        console.log(this.proveedor);
      },
      error =>{
        console.log(<any> error)
      }
    )
  }

  onSubmit(form){
    this._proveedorService.updateSocio(this.proveedor).subscribe(
      response=>{
        if(response){
          this._router.navigate(['mostrarProveedores']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
