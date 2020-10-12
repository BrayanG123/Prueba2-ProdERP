import { Component, OnInit } from '@angular/core';

import { Almacen } from 'src/app/models/almacen.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlmacenService } from 'src/app/services/almacen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-almacenedit',
  templateUrl: './almacenedit.component.html',
  styles: []
})
export class AlmaceneditComponent implements OnInit {

  almacen: Almacen = new Almacen('', null);
  id = 0;
  public cargando: boolean = true;

  constructor( private activatedRoute: ActivatedRoute,
               private _almacenService: AlmacenService,
               private router:Router,
  ) { 
    this.activatedRoute.params.subscribe( params => {
      // console.log(params['id']);
      this.id = Number(params['id']);
    } );

    this._almacenService.cargarAlmacenes()
          .subscribe( (almacenes: Almacen[]) => {
            this.cargando = false;
            this.cargarData( almacenes );
          } )
  }

  ngOnInit(): void {
  }

  cargarData( almacenes:Almacen[] ){

    for (let i = 0;  i < almacenes.length; i++) {
      if ( almacenes[i].id === this.id ){
        this.almacen = almacenes[i];
        // console.log('el elemento', almacenes[i]);
        // console.log('la almacen guardada', this.almacen);
        
        break;
      }
    }

  }

  guardar( almacen: Almacen ){
    // console.log(this.almacen);
    Swal.fire({
      title: 'Esta seguro?',
      text: "Desea editar el Almacen existente?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.almacen.ubicacion = almacen.ubicacion;
        this.almacen.office_id = almacen.office_id;
        this._almacenService.editarAlmacen( this.almacen )
                .subscribe( () => {
                  this.router.navigate( [ '/almacenes' ] );
                })
      }
    })      
  }


}
