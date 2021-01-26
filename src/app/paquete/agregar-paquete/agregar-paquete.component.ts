import { Component, OnInit } from '@angular/core';
import { Paquete } from '../../models/paquete';
import { PaqueteService} from '../../services/paquete.service';
import { ActivatedRoute,Router, Params } from '@angular/router';

@Component({
  selector: 'app-agregar-paquete',
  templateUrl: './agregar-paquete.component.html',
  styleUrls: ['./agregar-paquete.component.css'],
  providers: [PaqueteService]
})
export class AgregarPaqueteComponent implements OnInit {

  public paquete: Paquete;
  public status: string;
  public id_paquete:number;
  public id_agencia:number;

  constructor(
    private _paqueteService: PaqueteService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.paquete = new Paquete(0,'',0,0,'',0);
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.paquete);
    this._paqueteService.savePaquete(this.paquete).subscribe(
      response =>{
        if(response){
          this.status='success';
          this.id_agencia=this.paquete.edw_agencia_id_agencia;
          this.id_paquete=response[0].id_paquete;
          this._router.navigate(['agregarItinerario/',this.id_agencia,this.id_paquete]);
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
