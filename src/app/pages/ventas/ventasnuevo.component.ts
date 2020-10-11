import { Component, OnInit } from '@angular/core';

import { Venta } from 'src/app/models/ventas.model';
import { Ventaproduct } from 'src/app/models/ventaproduct.model';
import { VentasService } from 'src/app/services/ventas.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ventasnuevo',
  templateUrl: './ventasnuevo.component.html',
  styles: []
})
export class VentasnuevoComponent implements OnInit {

  //------ Ejemplo video -------
  // categoria = new Categoria('','');
  
  dataarrayy = [];
  //------ Hashta aqui Ejemplo video -------
  
  venta: Venta = new Venta( null, null, [] ); //este interactua con el template
  prodventa = new Ventaproduct(null, null, null, null);

  //los modelos extras que necesitare (cliente y pago)
  // proveedores: Proveedor[] = [];
  
  // dataarray = [];
  // forma: FormGroup;
  // numero: number = 3;

  constructor( public _ventasService: VentasService,
              //  public _proveedorService: ProveedorService,
               private fb:FormBuilder  
  ) { 
    // this.crearFormulario();
  }

  ngOnInit(): void {
    // this.categoria = new Categoria('',''); 
    // this.dataarray.push( this.categoria );
    
    // this.prodventa = new Ventaprod(null,null);
    this.dataarrayy.push( this.prodventa );
    console.log('el arreglo en Init: ', this.prodventa);
    // this.inicializarOpcionesSelect();
  }

  // inicializarOpcionesSelect(){
  //   this._proveedorService.cargarProveedores() 
  //         .subscribe( (proveedores: Proveedor[]) => {
  //           this.proveedores = proveedores;
  //           console.log('proveedores Cargados: ',this.proveedores);
  //           // console.log(this.categorias);
  //         } );
  // }


  limpiar(){
    this.prodventa = new Ventaproduct(null, null, null, null);
    this.venta = new Venta( null, null, [] );
    this.dataarrayy.push( this.prodventa );
  }

  onSubmit(){
    console.log( 'el arreglo al inciar Submit: ', this.dataarrayy );
    this.venta = new Venta( this.venta.client_id, this.venta.payment_id, this.dataarrayy);
    console.log('Antes de mandar al ventasService: ', this.venta);

    this._ventasService.crearVenta( this.venta )
          .subscribe( (resp:any) => {
            console.log(resp);
            this.limpiar();   
          } )

       
    // console.log('Ejecutado el crearventa?: acabo el proceso del submit');
  }
  
  // cambioProveedor(id:number){
  //     this.venta.provider_id = id;
  //     console.log('El ID solo:', id);
  //     console.log('La venta:', this.venta);
  // }

  addForm(){
    // this.categoria = new Categoria('','');
    // this.dataarray.push( this.categoria );

    this.prodventa = new Ventaproduct(null, null, null, null);
    this.dataarrayy.push( this.prodventa );
  }
  
  removeForm(index:number){
    this.dataarrayy.splice(index, 1);
  }

}
