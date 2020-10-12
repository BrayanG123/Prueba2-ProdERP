import { Component, OnInit } from '@angular/core';

import { Sucursal } from 'src/app/models/sucursal.model';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styles: []
})
export class SucursalComponent implements OnInit {

  public cargando: boolean = true;
  public sucursales: Sucursal[] = [];
  // public ciudades: Sucursal[] = [];

  constructor( private _sucursalServices: SucursalService,
               private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarSucursales();
  }

  cargarSucursales(){
    this._sucursalServices.cargarSucursales()
        .subscribe( (sucursales:any) => {
          // console.log(productos);
          this.sucursales = sucursales;
          this.cargando = false;
        } ) 
  }

  editarSucursal( sucursal:Sucursal ){
    this.router.navigate( [ '/sucursaleditar', sucursal.id ] );
  }

  borrarSucursal( sucursal:Sucursal ){    

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
        this._sucursalServices.borrarSucursal( sucursal.id )
              .subscribe( () => this.cargarSucursales() )
      }
    })

  }

}
