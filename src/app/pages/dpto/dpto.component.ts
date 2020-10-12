import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Departamento } from 'src/app/models/departamento.model';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-dpto',
  templateUrl: './dpto.component.html',
  styles: []
})
export class DptoComponent implements OnInit {

  public cargando: boolean = true;
  public departamentos: Departamento[] = [];

  constructor( private _departamentoServices: DepartamentoService,
               private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarDepartamentos();
  }

  cargarDepartamentos(){
    this._departamentoServices.cargarDptos().subscribe( (departamentos:any) => {
          // console.log(productos);
          this.departamentos = departamentos;
          this.cargando = false;
    } ) 
  }

  editarDpto( dpto ){}

  borrarDpto( dpto ){}

}
