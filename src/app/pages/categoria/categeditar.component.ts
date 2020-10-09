import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';

//para recibir el parametro id por url
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-categeditar',
  templateUrl: './categeditar.component.html',
  styles: []
})
export class CategeditarComponent implements OnInit {

  categoria: Categoria;
  id = 0;
  public cargando: boolean = true;

  constructor( private activatedRoute: ActivatedRoute,
               private _categoriaService: CategoriaService,
               private router:Router,
  ) { 
    this.activatedRoute.params.subscribe( params => {
      // console.log(params['id']);
      this.id = Number(params['id']);
    } );

    this._categoriaService.cargarCategorias()
          .subscribe( (categorias: Categoria[]) => {
            this.cargando = false;
            this.cargarData( categorias );
          } )
  }

  ngOnInit(): void {
  }

  cargarData( categorias:Categoria[] ){

    for (let i = 0;  i < categorias.length; i++) {
      if ( categorias[i].id === this.id ){
        this.categoria = categorias[i];
        // console.log('el elemento', categorias[i]);
        // console.log('la categoria guardada', this.categoria);
        
        break;
      }
    }

  }

  guardar( categoria: Categoria ){
    console.log(this.categoria);
    Swal.fire({
      title: 'Esta seguro?',
      text: "Desea editar la Categoria existente?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoria.nombre = categoria.nombre;
        this.categoria.descripcion = categoria.descripcion;
        this._categoriaService.editarCategoria( this.categoria )
                .subscribe( () => {
                  this.router.navigate( [ '/categorias' ] );
                })
      }
    })      
  }

}
