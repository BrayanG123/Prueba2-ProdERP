import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dpto',
  templateUrl: './dpto.component.html',
  styles: []
})
export class DptoComponent implements OnInit {

  public cargando: boolean = true;
  // public departamentos: Departamento[] = [];

  constructor( 
    // private _departamentoServices: DepartamentoService,
               private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarDepartamentos();
  }

  cargarDepartamentos(){
    // this._departamentoServices.cargarDepartamentos()
    //     .subscribe( (departamentos:any) => {
    //       // console.log(productos);
    //       this.departamentos = departamentos;
    //       this.cargando = false;
    //     } ) 
  }

}
