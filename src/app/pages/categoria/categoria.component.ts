import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ReporteService } from 'src/app/services/reporte.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styles: []
})
export class CategoriaComponent implements OnInit {

  public categorias: Categoria[] = [];
  public cargando: boolean = true;

  constructor( public _categoriaService: CategoriaService,
               private router: Router,
              //  private _asas:ReporteService
  ) { }

  ngOnInit(): void {
    this.cargarCategorias();
    // this._asas.cargarVentas().subscribe( resp => {
    //   console.log(resp);
    // } )
  }

  cargarCategorias(){
    this._categoriaService.cargarCategorias()
        .subscribe( (categorias:any) => {
          // console.log(categorias);
          this.categorias = categorias;
          this.cargando = false;
        } ) 
  }

  editarCategoria( categoria: Categoria){
    // console.log(categoria);
    this.router.navigate( [ '/categeditar', categoria.id ] );
    
  }

  borrarCategoria( categoria: Categoria){
    
    Swal.fire({
      title: 'Estas seguro?',
      text: "Se borrara el registro",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._categoriaService.borrarCategoria( categoria.id )
                .subscribe( () => this.cargarCategorias() )
      }
    })

  }

}
