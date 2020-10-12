import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/compras.model';
import { ComprasService } from 'src/app/services/compras.service';


import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'; //Para el agregado de productos
import { Categoria } from 'src/app/models/categoria.model';
import { Compraprod } from 'src/app/models/compraprod.model';
import { Proveedor } from 'src/app/models/proveedor.model';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto.model';
import { Almacen } from 'src/app/models/almacen.model';
import { AlmacenService } from 'src/app/services/almacen.service';

@Component({
  selector: 'app-comprasnuevo',
  templateUrl: './comprasnuevo.component.html',
  styles: []
})
export class ComprasnuevoComponent implements OnInit {

  //------ Ejemplo video -------
  categoria = new Categoria('','');
  dataarrayy: Compraprod[] = [];
  //------ Hashta aqui Ejemplo video -------
  
  compra: Compra = new Compra( null, null, [] ); //este interactua con el template
  prodcompra = new Compraprod(null,null);
  proveedores: Proveedor[] = [];
  productos: Producto[] = [];
  depositos: Almacen[] = [];
  
  // dataarray = [];
  // forma: FormGroup;
  // numero: number = 3;

  constructor( public _comprasService: ComprasService,
               public _proveedorService: ProveedorService,
               public _productoService: ProductoService,
               public _depositoService: AlmacenService,
               private fb:FormBuilder  
  ) { 
    // this.crearFormulario();
  }

  ngOnInit(): void {
    // this.categoria = new Categoria('',''); 
    // this.dataarray.push( this.categoria );
    
    this.prodcompra = new Compraprod(null,null);
    this.dataarrayy.push( this.prodcompra );

    this.inicializarOpcionesSelect();
  }

  inicializarOpcionesSelect(){
    this._proveedorService.cargarProveedores().subscribe( (proveedores: Proveedor[]) => {
        this.proveedores = proveedores;
        //====================================
        this._productoService.cargarProductos().subscribe( (productos: Producto[]) => {
            this.productos = productos;
            //==================================
            this._depositoService.cargarAlmacenes().subscribe( (depositos: Almacen[]) => {
                this.depositos = depositos;
                //================================
            });
        })
    } );
  }

  limpiar(){
    this.prodcompra = new Compraprod(null,null);
    this.compra = new Compra( null, null, [] );
    this.dataarrayy.push( this.prodcompra );
  }

  onSubmit(){
    console.log( this.dataarrayy );
    this.compra = new Compra( this.compra.provider_id, this.compra.deposit_id, [], this.dataarrayy);
    console.log('Antes de mandar al ComprasService: ');
    console.log( this.compra );
    // return;
    this._comprasService.crearCompra( this.compra ).subscribe( (resp:any) => {
            console.log(resp);
            // console.log('ComprasTS: tal parece que paso el submit');
            
            this.limpiar();     
            

    }) 

    // console.log('Ejecutado el crearCompra?: acabo el proceso del submit');
  }

  cambioProducto(id, index){
    this.dataarrayy[index].id = parseInt(id);
  }

  cambioDeposito(id){
    this.compra.deposit_id = parseInt(id);
  }

  cambioProveedor(id){
      this.compra.provider_id = parseInt(id);
      // console.log('El ID solo:', id);
      // console.log('La compra:', this.compra);
  }

  addForm(){
    // this.categoria = new Categoria('','');
    // this.dataarray.push( this.categoria );

    this.prodcompra = new Compraprod(null,null);
    this.dataarrayy.push( this.prodcompra );
  }
  
  removeForm(index:number){
    this.dataarrayy.splice(index, 1);
  }



  //---------------------- ANTERIOR FORMAAAAAAAAAAAAAAAAAAA ---------------------
  
  // get productos(){
  //   return this.forma.get('productos') as FormArray;
  // }

  // guardarr( compra: Compra ){

  //   this.compra.provider_id = compra.provider_id;
  //   this.compra.deposit_id = compra.deposit_id;
  //   this.compra.products = compra.products;
    
  //   console.log('compras.ts: ', this.compra);

  //   this._comprasService.crearCompra( this.compra )
  //       .subscribe( compra => {
  //         console.log(compra);
  //       } );
  // }

  // agregarProducto(){  //<--- AQUIII
  //   this.productos.push( this.fb.control(  { id: null, cantidad: null } , Validators.required )
  //   );
  // }

  // borrarProducto(index: number){
  //   this.productos.removeAt( index );
  // }

  // guardar(){
  //   console.log(this.forma);
  //   // this.compra. = compra.;
  //   // this.compra. = compra.;
  //   // this.compra. = compra.;
  //   // this.compra. = compra.;
  //   // this.compra. = compra.;
    
  //   console.log('compra.ts: ', this.compra);

  //   // this._compraService.crearCompra( this.compra )
  //   //     .subscribe( compra => {
  //   //       console.log(compra);
  //   //     } );
  // }

  // crearFormulario(){
  //   this.forma = this.fb.group({
  //     idproveedor  : ['', [ Validators.required, Validators.minLength(5) ]],
  //     iddeposito: ['', [ Validators.required, Validators.minLength(5) ]],
  //     // direccion: this.fb.group({
  //     //   distrito: ['', Validators.required],
  //     //   ciudad: ['', Validators.required],
  //     // }),
  //     productos: this.fb.array([]),
  //     // productos: this.fb.group( {
  //     //   id: [null],
  //     //   cantidad: [null]
  //     // } ),
  //   });
  // }
  //---------------------- FIN ANTERIOR FORMAAAAAAAAAAAAAAAAAAA ---------------------

}
