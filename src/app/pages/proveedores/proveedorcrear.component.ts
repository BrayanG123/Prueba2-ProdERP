import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-proveedorcrear',
  templateUrl: './proveedorcrear.component.html',
  styles: []
})
export class ProveedorcrearComponent implements OnInit {

  proveedor: Proveedor = new Proveedor('', '', '');

  constructor( public _proveedorService: ProveedorService 
    
  ) { 
  }

  ngOnInit(): void {
    
  }

  crearProveedor( proveedor: Proveedor ){
    this.proveedor.empresa = proveedor.empresa;
    this.proveedor.direccion = proveedor.direccion;
    this.proveedor.telefono = proveedor.telefono;

    this._proveedorService.crearProveedor( this.proveedor )
        .subscribe( proveedor => {
          console.log(proveedor);
        } );

    
  }

  guardar( proveedor: Proveedor ){
    
    // this.proveedor.empresa = proveedor.nombre;
    // this.proveedor.direccion = proveedor.direccion;
    // this.proveedor.telefono = proveedor.telefono;
   
    // this._usuarioService.actualizarUsuario( this.usuario )
    //               .subscribe( );

    this.proveedor.empresa = proveedor.empresa;
    this.proveedor.direccion = proveedor.direccion;
    this.proveedor.telefono = proveedor.telefono;
    
    // console.log('proveedor.ts: ', this.proveedor);

    this._proveedorService.crearProveedor( this.proveedor )
        .subscribe( proveedor => {
          console.log(proveedor);
        } );
  }


}
