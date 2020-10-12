import { Component, OnInit } from '@angular/core';

import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Departamento } from 'src/app/models/departamento.model';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-dptonuevo',
  templateUrl: './dptonuevo.component.html',
  styles: []
})
export class DptonuevoComponent implements OnInit {

  // categoria: Categoria = new Categoria('', '');
  // public cargando: boolean = true;
  public departamento: Departamento = new Departamento('', null);

  constructor( public _dptoService: DepartamentoService) { }

  ngOnInit(): void {
  }

  guardar( departamento: Departamento ){
    this.departamento.nombre = departamento.nombre;
    this.departamento.cantidad_de_empleados = departamento.cantidad_de_empleados;
    // console.log(this.departamento);
    // return;

    this._dptoService.crearDpto( this.departamento ).subscribe( (resp:any) => {
          console.log(resp);
        // this.departamento = departamento;
    } );
  }

}
