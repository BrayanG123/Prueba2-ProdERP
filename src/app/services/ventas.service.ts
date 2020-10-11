import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';
import { Venta } from 'src/app/models/ventas.model';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  token = localStorage.getItem('access_token')

  constructor( public http: HttpClient ) { }

  cargarVentas(){
    let url = URL_SERVICIOS + '/sales';
    // console.log('el token: ', this.token);
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.token}`,
      "Accept": "application/json",
    });
    
    return this.http.get( url, { headers: reqHeader } );
  }

  crearVenta( venta: Venta ){
    let url = URL_SERVICIOS + '/newSale';

    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.token}`,
      "Accept": "application/json",
    });
    
    console.log('venta.servie: ', venta);
    return this.http.post( url, venta,  { headers: reqHeader } )
        .pipe( map((resp: any) => {
          // console.log(resp);
          Swal.fire(
            'Creado!',
            'El registro se ha creado correctamente',
            'success'
          );
          return resp;
        }));
  }

  // editarAlmacen( venta: Almacen ){
  //   let url = URL_SERVICIOS + `/deposit/${almacen.id}`;

  //   return this.http.put( url, almacen)
  //                   .pipe( map( (resp:any) => {
  //                     Swal.fire(
  //                       'Editado',
  //                       'El registro se ha editado correctamente',
  //                       'success'
  //                     );
  //                     return resp;
  //                   } ) )
  // }


  // borrarAlmacen( id ){
  //   let url = URL_SERVICIOS + `/deposit/${id}`;

  //   return this.http.delete( url)
  //               .pipe( map( (resp:any) => {
  //                 Swal.fire(
  //                   'Borrado',
  //                   'El registro ha sido borrado',
  //                   'success'
  //                 );
  //                 return resp;
  //               } ) )
  // }

}
