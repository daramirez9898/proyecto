import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../models/proveedor';
import { SocioServiceService} from '../../services/socio-service.service';

@Component({
  selector: 'app-agregar-socio',
  templateUrl: './agregar-socio.component.html',
  styleUrls: ['./agregar-socio.component.css'],
  providers: [SocioServiceService]
})
export class AgregarSocioComponent implements OnInit {

  public proveedor: Proveedor;
  public status: string;

  constructor(
    private _proveedorService: SocioServiceService
  ) { 
    this.proveedor= new Proveedor(0,'','',0,'');
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.proveedor);
    this._proveedorService.saveSocio(this.proveedor).subscribe(
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
