import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-productonuevo',
  templateUrl: './productonuevo.component.html',
  styles: []
})
export class ProductonuevoComponent implements OnInit {

  categorias: Categoria[] = [];
  producto: Producto = new Producto( null, '', '', '', '' );
  categoria: Categoria = new Categoria('','');


  public productoForm: FormGroup;

  constructor( private fb: FormBuilder,
               public _productoService: ProductoService,
               public _categoriaService: CategoriaService  
  ) { }

  ngOnInit(): void {

    this.productoForm = this.fb.group({
      categoria: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      costo: ['', Validators.required],

    });

    //para tener listas las categorias al inciar el componente producto
    this.cargarCategorias();

  }

  guardar( producto: Producto ){
    this.producto.nombre = producto.nombre;
    this.producto.descripcion = producto.descripcion;
    this.producto.precio = producto.precio;
    this.producto.costo = producto.costo;
    
    // console.log('producto.ts: ', this.producto);

    this._productoService.crearProducto( this.producto )
        .subscribe( producto => {
          // console.log(producto);
        } );
  }

  cargarCategorias(){
    this._categoriaService.cargarCategorias() 
          .subscribe( (categorias: Categoria[]) => {
            this.categorias = categorias;
            // console.log(this.categorias);
          } );
  }
  cambioCategoria( id:number ){
    this.producto.category_id = id;
  }


}
