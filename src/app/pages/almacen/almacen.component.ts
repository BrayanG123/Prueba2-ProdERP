import { Component, OnInit } from '@angular/core';
import { AlmacenService } from 'src/app/services/almacen.service';

import { Router } from '@angular/router';
import { Almacen } from '../../models/almacen.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styles: []
})
export class AlmacenComponent implements OnInit {

  public cargando: boolean = true;
  public almacenes: Almacen[] = [];

  constructor( private _almacenServices: AlmacenService,
               private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarAlmacenes();
  }

  cargarAlmacenes(){
    this._almacenServices.cargarAlmacenes()
        .subscribe( (almacenes:any) => {
          // console.log(productos);
          this.almacenes = almacenes;
          this.cargando = false;
        } ) 
  }

  editarAlmacen( almacen:Almacen ){
    this.router.navigate( [ '/almaceneditar', almacen.id ] );
  }

  borrarAlmacen( almacen:Almacen ){    

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
        this._almacenServices.borrarAlmacen( almacen.id )
              .subscribe( () => this.cargarAlmacenes() )
      }
    })

  }


}
