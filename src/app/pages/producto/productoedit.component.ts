import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto.model';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productoedit',
  templateUrl: './productoedit.component.html',
  styles: []
})
export class ProductoeditComponent implements OnInit {

  categorias: Categoria[] = [];
  categ: Categoria;
  public cargando: boolean = true;
  public producto: Producto;
  id; //id del producto
  public productoForm: FormGroup;

  constructor( private _productoService: ProductoService,
               private _categoriaService: CategoriaService,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private fb: FormBuilder,
  ) { 

    this.activatedRoute.params.subscribe( params => {
        // console.log(params['id']);
        this.id = Number(params['id']);
    } );
    
    this._productoService.cargarProductos()
          .subscribe( (productos: Producto[]) => {
              
              this.cargarData( productos );
          } )
  }  

  cargarData(productos: Producto[]) {
    // console.log(productos);
    
    for (let i = 0;  i < productos.length; i++) {
      if ( productos[i].id === this.id ){
        this.producto = productos[i];
        break;
      }
    }

    this._categoriaService.getCategoria( this.producto.category_id )
        .subscribe( ( r: any)=> {
          this.categ = r;
          this.cargarCategorias();
        } );
        
  }

  ngOnInit(): void {
    
  }

  cargarCategorias(){
    this._categoriaService.cargarCategorias() 
          .subscribe( (categorias: Categoria[]) => {
            this.categorias = categorias;
            this.cargando = false;
            // console.log(this.categorias);
            this.productoForm = this.fb.group({
              categoria: [''],
              nombre: ['', Validators.required],
              descripcion: ['', Validators.required],
              precio: ['', Validators.required],
              costo: ['', Validators.required],
              
            });
            console.log(this.productoForm);
          } );
  }

  cambioCategoria( id: number ){
    this.producto.category_id = id;
  }

  guardar( producto: Producto ){
    // console.log('producto.ts: ', this.producto);
    // return;
    Swal.fire({
      title: 'Esta seguro?',
      text: "Desea editar el producto existente?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.producto.nombre = producto.nombre;
        this.producto.descripcion = producto.descripcion;
        this.producto.precio = producto.precio;
        this.producto.costo = producto.costo;
        this._productoService.editarProducto( this.producto )
            .subscribe( () => {
                this.router.navigate( [ '/producto' ] );
            } );
      }
    }) 

  }

}
