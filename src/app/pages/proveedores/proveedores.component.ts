import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';
import { ProveedorService } from 'src/app/services/proveedor.service';

import Swal from 'sweetalert2'
import { Router } from '@angular/router'

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styles: []
})
export class ProveedoresComponent implements OnInit {

  public proveedores: Proveedor[] = [];
  public cargando: boolean = true;

  constructor( public _proveedorService: ProveedorService,  
               private router: Router,
  ) { }

  ngOnInit(): void {
    this.cargarProveedores();
  }

  cargarProveedores(){
    this._proveedorService.cargarProveedores()
        .subscribe( (proveedores:any) => {
          // console.log(proveedores);
          this.proveedores = proveedores;
          this.cargando = false;
        } ) 
  }

  editarProveedor( proveedor: Proveedor ){
    // console.log(proveedor);
    this.router.navigate( [ '/proveedit', proveedor.id ] );
  }
  
  borrarProveedor( proveedor: Proveedor ){
    // console.log(proveedor);
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
        this._proveedorService.borrarProveedor( proveedor.id )
                .subscribe( () => this.cargarProveedores() )
      }
    })

    
  }

}
