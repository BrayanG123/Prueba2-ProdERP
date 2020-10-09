import { Component, OnInit } from '@angular/core';

import { Proveedor } from 'src/app/models/proveedor.model';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedit',
  templateUrl: './proveedit.component.html',
  styles: []
})
export class ProveeditComponent implements OnInit {

  proveedor: Proveedor = new Proveedor('', '', '');
  cargando: boolean = true;
  id;

  constructor( private _proveedorService: ProveedorService,
               private router: Router,
               private activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.params.subscribe( params => {
      // console.log(params['id']);
      this.id = Number(params['id']);
    } );

    this._proveedorService.cargarProveedores()
          .subscribe( (proveedores: Proveedor[]) => {
            this.cargando = false;
            this.cargarData( proveedores );
          } )
  }

  ngOnInit(): void {
  }

  cargarData( proveedores: Proveedor[] ){
    for (let i = 0;  i < proveedores.length; i++) {
      if ( proveedores[i].id === this.id ){
        this.proveedor = proveedores[i];
        break;
      }
    }
  }

  guardar( proveedor: Proveedor ){
    // console.log(this.proveedor);
    Swal.fire({
      title: 'Esta seguro?',
      text: "Desea editar el proveedor existente?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.proveedor.empresa = proveedor.empresa;
        this.proveedor.direccion = proveedor.direccion;
        this.proveedor.telefono = proveedor.telefono;
        this._proveedorService.editarProveedor( this.proveedor )
                .subscribe( () => {
                  this.router.navigate( [ '/proveedores' ] );
                })
      }
    })     

  }

}
