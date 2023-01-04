import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BuscadoresService } from '../../services/buscadores.service';

@Component({
  selector: 'app-modal-buscador-generico',
  templateUrl: './modal-buscador-generico.component.html',
  styleUrls: ['./modal-buscador-generico.component.scss']
})
export class ModalBuscadorGenericoComponent implements OnInit {

  public cargandoDatos: boolean;
  public resultados: any[];

  constructor(
    public dialogRef: MatDialogRef<ModalBuscadorGenericoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    /*
    Se espera que 'data' contenga:
      endpoint => endpoint que traerá los datos
      parametros => son los parametros de busqueda que tendra sobre el endpoint (debe contener al menos el atributo nombre)
      encabezados => nombre de los encabezados de la tabla
      atributos => nombre de los atributos que se mostrarán
   */
    private buscadorService: BuscadoresService
  ) {
    this.cargandoDatos = false;
  }

  ngOnInit() {
    this.cargarDatos(this.data.parametros);
  }

  public buscar(palabra: string) {
    const parametros = {... this.data.parametros };
    parametros.palabra = palabra;
    this.resultados = [];
    this.cargarDatos(parametros);
  }

  public elegir(valor: any) {
    // nombreCompleto es una propiedad generica para mostrar, simulando un toString
    valor['nombreCompleto'] = '';
    this.data.atributos.forEach(elemento => {
      valor['nombreCompleto'] += valor[elemento] ? valor[elemento] + ' ' : '';
    });
    valor['nombreCompleto'] = valor['nombreCompleto'].slice(0, -1);
    this.dialogRef.close(valor);
  }

  private cargarDatos(parametros: any) {
    this.cargandoDatos = true;
    this.buscadorService.getDatos(this.data.endpoint, parametros)
      .subscribe(respuesta => {
        this.resultados = respuesta['clientes'];
        this.cargandoDatos = false;
      });
  }

}
