import { Component, OnInit } from '@angular/core';
import { PaqueteService } from '../../services/paquete.service';
import { ActivatedRoute,Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-precio',
  templateUrl: './precio.component.html',
  styleUrls: ['./precio.component.css'],
  providers: [PaqueteService]
})
export class PrecioComponent implements OnInit {

  public id_paquete:number;
  public costo_base:number;
  public agregado:number;

  constructor(
    private _paqueteService: PaqueteService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.agregado=0;
    this.id_paquete = this._route.snapshot.params.id;
  }

  onSubmit(form){
    this._paqueteService.savePrecio(this.id_paquete,this.costo_base).subscribe(
      response =>{ 
        this.agregado=1;

      },
      error=>{

      }
    );
  }

}
