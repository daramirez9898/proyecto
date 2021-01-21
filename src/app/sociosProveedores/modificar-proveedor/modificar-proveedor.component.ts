import { Component, OnInit } from '@angular/core';
import { SocioServiceService} from '../../services/socio-service.service';
import { Global } from '../../services/global';
import { Proveedor } from '../../models/proveedor';
import { ActivatedRoute,Router, Params } from '@angular/router';

@Component({
  selector: 'app-modificar-proveedor',
  templateUrl: './modificar-proveedor.component.html',
  styleUrls: ['./modificar-proveedor.component.css'],
  providers: [SocioServiceService]
})
export class ModificarProveedorComponent implements OnInit {

  public url:string;
  public proveedor: Proveedor;

  constructor(
    private _proveedorService: SocioServiceService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
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

  deleteProveedor(id){
    this._proveedorService.deleteSocio(id).subscribe(
      response =>{
        console.log(response);
        if(response){
          this._router.navigate(['mostrarProveedores']);
        }
      },
      error =>{
        console.log(<any>error);
      }
    ) 
  }

}