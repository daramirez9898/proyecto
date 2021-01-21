import { Component, OnInit } from '@angular/core';
import { AgenciaService } from '../../services/agencia.service';
import { saveAs } from 'browser-filesaver/FileSaver.js';


@Component({
  selector: 'app-reporte-agencia',
  templateUrl: './reporte-agencia.component.html',
  styleUrls: ['./reporte-agencia.component.css'],
  providers:[AgenciaService]

})
export class ReporteAgenciaComponent implements OnInit {

  public respuesta:any;
  constructor(
    private _agenciaService: AgenciaService
  ){ }

  ngOnInit(): void {
    
  }

  reporte(){
    this._agenciaService.reporte().subscribe(
      response =>{
        this.respuesta=response;
        this.downloadFile();
      }
    );
  }

  downloadFile() {
    var blob = new Blob([this.respuesta], {type: 'application/pdf'});
    saveAs(blob, "report.pdf");
 }

}
