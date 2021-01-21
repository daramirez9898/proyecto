import { Component, OnInit } from '@angular/core';
import { Agencia } from '../../models/agencia';
import { AgenciaService} from '../../services/agencia.service';
@Component({
  selector: 'app-agregar-agencia',
  templateUrl: './agregar-agencia.component.html',
  styleUrls: ['./agregar-agencia.component.css'],
  providers:[AgenciaService]
})
export class AgregarAgenciaComponent implements OnInit {
  public agencia: Agencia;
  public status: string

  constructor(
    private _agenciaService: AgenciaService
  ) {
    this.agencia= new Agencia(0,'','','','','');
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.agencia);
    this._agenciaService.saveAgencia(this.agencia).subscribe(
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
