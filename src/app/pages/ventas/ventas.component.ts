import { Component, OnInit } from '@angular/core';

import { VentasService } from 'src/app/services/ventas.service';
import { Router } from '@angular/router';
// import Swal from 'sweetalert2';
import { Ventaget } from 'src/app/models/ventasget.model';
// import { Ventaproductget } from 'src/app/models/ventasproductget.model';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styles: []
})
export class VentasComponent implements OnInit {

  public cargando: boolean = true;

  public ventasget: Ventaget[] = [];
  // public ventasproductget: Ventaproductget[] = [];


  constructor( private _ventaServices: VentasService,
               private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarVentaes();
  }

  cargarVentaes(){
    this._ventaServices.cargarVentas()
        .subscribe( (ventas:any) => {
          // console.log(ventas);
          this.ventasget = ventas;
          this.cargando = false;
        } )   
  }

  // editarSucursal( venta:Venta ){
  //   // this.router.navigate( [ '/sucursaleditar', venta.id ] );
  // }

  // borrarSucursal( venta:Venta ){    

  //   Swal.fire({
  //     title: 'Esta seguro?',
  //     text: "Se borrara el registro",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     cancelButtonText: 'Cancelar',
  //     confirmButtonText: 'Aceptar'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this._ventaServices.borrarSucursal( venta.id )
  //             .subscribe( () => this.cargarSucursales() )
  //     }
  //   })

  // }

}
