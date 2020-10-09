import { Component, OnInit } from '@angular/core';

import { Sucursal } from 'src/app/models/sucursal.model';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-sucursalnuevo',
  templateUrl: './sucursalnuevo.component.html',
  styles: []
})
export class SucursalnuevoComponent implements OnInit {

  sucursal: Sucursal = new Sucursal('', null);

  constructor( public _sucursalService: SucursalService) { }

  ngOnInit(): void {
  }

  guardar( sucursal: Sucursal ){
    
    // console.log('inicio',sucursal);
    this.sucursal.nombre = sucursal.nombre;
    this.sucursal.city_id = sucursal.city_id;
    // console.log('guardar', this.sucursal);

    this._sucursalService.crearSucursal( this.sucursal )
        .subscribe( sucursal => {
          console.log(sucursal);
        } );
  }


}
