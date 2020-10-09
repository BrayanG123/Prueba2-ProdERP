import { Component, OnInit } from '@angular/core';
import { Almacen } from 'src/app/models/almacen.model';
import { AlmacenService } from 'src/app/services/almacen.service';

@Component({
  selector: 'app-almacennuevo',
  templateUrl: './almacennuevo.component.html',
  styles: []
})
export class AlmacennuevoComponent implements OnInit {

  almacen: Almacen = new Almacen('', null);

  constructor( public almacenServices: AlmacenService ) { }

  ngOnInit(): void {
  }

  guardar( almacen: Almacen ){
    
    this.almacen.ubicacion = almacen.ubicacion;
    this.almacen.office_id = almacen.office_id;

    this.almacenServices.crearAlmacen( this.almacen )
        .subscribe();
  }
}
