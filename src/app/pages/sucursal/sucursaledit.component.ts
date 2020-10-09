import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { SucursalService } from 'src/app/services/sucursal.service';
import { Sucursal } from 'src/app/models/sucursal.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sucursaledit',
  templateUrl: './sucursaledit.component.html',
  styles: []
})
export class SucursaleditComponent implements OnInit {

  sucursal: Sucursal;
  id = 0;
  public cargando: boolean = true;

  constructor( private activatedRoute: ActivatedRoute,
               private _sucursalService: SucursalService,
               private router:Router,
  ) { 
    this.activatedRoute.params.subscribe( params => {
      // console.log(params['id']);
      this.id = Number(params['id']);
    } );

    this._sucursalService.cargarSucursales()
          .subscribe( (sucursales: Sucursal[]) => {
            this.cargando = false;
            this.cargarData( sucursales );
          } )
  }

  ngOnInit(): void {
  }

  cargarData( sucursales:Sucursal[] ){

    for (let i = 0;  i < sucursales.length; i++) {
      if ( sucursales[i].id === this.id ){
        this.sucursal = sucursales[i];
        // console.log('el elemento', sucursales[i]);
        // console.log('la sucursal guardada', this.sucursal);
        
        break;
      }
    }

  }

  guardar( sucursal: Sucursal ){
    console.log(this.sucursal);
    Swal.fire({
      title: 'Esta seguro?',
      text: "Desea editar la Sucursal existente?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.sucursal.nombre = sucursal.nombre;
        this.sucursal.city_id = sucursal.city_id;
        this._sucursalService.editarSucursal( this.sucursal )
                .subscribe( () => {
                  this.router.navigate( [ '/sucursal' ] );
                })
      }
    })      
  }

}
