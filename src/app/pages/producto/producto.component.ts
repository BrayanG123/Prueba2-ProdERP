import { Component, OnInit } from '@angular/core';

import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {

  public productos: Producto[] = [];
  public cargando: boolean = true;

  constructor( public _productoService: ProductoService,
               private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(){
    this._productoService.cargarProductos()
        .subscribe( (productos:any) => {
          // console.log(productos);
          this.productos = productos;
          console.log(this.productos);
          this.cargando = false;
        } ) 
  }

  editarProducto( producto:Producto ){
    this.router.navigate( [ '/producto-edit', producto.id ] );
  }

  borrarProducto( producto:Producto ){
    // console.log('En construccion', producto);
    Swal.fire({
      title: 'Esta seguro?',
      text: "Se borrara el registro",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._productoService.borrarProducto( producto.id )
                .subscribe( () => this.cargarProductos() )
      }
    })

  }

}
