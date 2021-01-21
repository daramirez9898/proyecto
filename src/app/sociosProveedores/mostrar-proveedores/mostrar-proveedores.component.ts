import { Component, OnInit } from '@angular/core';
import { SocioServiceService} from '../../services/socio-service.service';
import { Proveedor } from '../../models/proveedor';

@Component({
  selector: 'app-mostrar-proveedores',
  templateUrl: './mostrar-proveedores.component.html',
  styleUrls: ['./mostrar-proveedores.component.css'],
  providers: [SocioServiceService]
})
export class MostrarProveedoresComponent implements OnInit {

  public proveedores: Proveedor[]
  constructor(
    private _proveedorService: SocioServiceService
  ){ }

  ngOnInit(): void {
    this.getSocios();
  }

  getSocios(){
    this._proveedorService.getSocios().subscribe(
      response =>{
        this.proveedores = response;
      },
      error=>{
        console.log(<any> error);
      }
    );
  }

}
