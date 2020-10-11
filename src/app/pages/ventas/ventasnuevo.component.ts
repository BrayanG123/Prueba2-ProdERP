import { Component, OnInit } from '@angular/core';

import { Venta } from 'src/app/models/ventas.model';
import { Ventaproduct } from 'src/app/models/ventaproduct.model';

import { VentasService } from 'src/app/services/ventas.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ClienteService } from 'src/app/services/cliente.service';
// import { FormBuilder } from '@angular/forms';

import { Producto } from 'src/app/models/producto.model';
import { Cliente } from 'src/app/models/cliente.model';
import { Almacen } from 'src/app/models/almacen.model';
import { AlmacenService } from 'src/app/services/almacen.service';

@Component({
  selector: 'app-ventasnuevo',
  templateUrl: './ventasnuevo.component.html',
  styles: []
})
export class VentasnuevoComponent implements OnInit {

  
  
  venta: Venta = new Venta( null, null, [] ); //este interactua con el template
  arregloProductos: Ventaproduct[] = [];
  arregloPrueba = [];
  prodventa = new Ventaproduct(null, null, null);

  //los modelos extras que necesitare (cliente, pago, producto)
  // proveedores: Proveedor[] = [];
  productos: Producto[] = [];
  clientes: Cliente[] = [];
  depositos: Almacen[] = [];

  // dataarray = [];
  // forma: FormGroup;
  // numero: number = 3;

  constructor( private _ventasService: VentasService,
               public _productoService: ProductoService,
               public _clienteService: ClienteService,
               public _depositoService: AlmacenService,
              //  private fb:FormBuilder  
  ) { 
    // this.crearFormulario();
  }

  ngOnInit(): void {
    // this.categoria = new Categoria('',''); 
    // this.dataarray.push( this.categoria );
    
    // this.prodventa = new Ventaprod(null,null);
    this.arregloProductos.push( this.prodventa );
    // console.log('el arreglo en Init: ', this.prodventa);
    this.inicializarOpcionesSelect();
  }

  inicializarOpcionesSelect(){


    
    this._clienteService.cargarClientes().subscribe( (clientes: Cliente[]) => {
            this.clientes = clientes;

            this._productoService.cargarProductos().subscribe( (productos: Producto[]) => {
                    this.productos = productos;

                  this._depositoService.cargarAlmacenes().subscribe( (depositos: Almacen[]) => {
                      this.depositos = depositos;
  
                      
                  } );
            } );
    } );

  }


  limpiar(){
    this.prodventa = new Ventaproduct(null, null, null);
    this.venta = new Venta( null, null, [] );
    this.arregloProductos.push( this.prodventa );
  }

  onSubmit(){
    console.log( 'el arreglo al inciar Submit: ', this.arregloProductos );
    this.arregloPrueba = this.arregloProductos;
    this.venta = new Venta( this.venta.client_id, this.venta.payment_id, this.arregloPrueba);
    console.log('Antes de mandar al ventasService: ', this.venta);
    // return;
    this._ventasService.crearVenta( this.venta ).subscribe( (resp:any) => {
            console.log(resp);
            this.limpiar();   
    } )

       
    // console.log('Ejecutado el crearventa?: acabo el proceso del submit');
  }
  
  cambioCliente(id){
    this.venta.client_id = parseInt(id);
  }
  cambioProducto(id, index){
    this.arregloProductos[index].id = parseInt(id);
    // this.venta.provider_id = id;
    // this.venta.provider_id = id;
    // this.arregloProductos[]
    // console.log('el elemetno: ', elemento);
    // console.log('el index', index);
    // console.log('El ID solo:', id);
    // console.log('el arregloProductos', this.arregloProductos);
    // console.log('La venta:', this.venta);
  }
  cambioDeposito(id, index){
    this.arregloProductos[index].deposit_id = parseInt(id);
  }
  // cambioProveedor(id:number){
  //   this.compra.provider_id = id;
  //   console.log('El ID solo:', id);
  //   console.log('La compra:', this.compra);
  // }

  addForm(){
    // this.categoria = new Categoria('','');
    // this.dataarray.push( this.categoria );

    this.prodventa = new Ventaproduct(null, null, null);
    this.arregloProductos.push( this.prodventa );
  }
  
  removeForm(index:number){
    this.arregloProductos.splice(index, 1);
  }

}
