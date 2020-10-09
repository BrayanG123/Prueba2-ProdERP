import { Injectable } from '@angular/core';

import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Almacen } from '../models/almacen.model';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  constructor( public http: HttpClient ) { }

  cargarAlmacenes(){
    let url = URL_SERVICIOS + '/deposits';
    
    return this.http.get( url );
  }

  crearAlmacen( almacen: Almacen ){
    let url = URL_SERVICIOS + '/deposit';
    
    console.log('almacen.servie: ', almacen);
    return this.http.post( url, almacen )
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

  editarAlmacen( almacen: Almacen ){
    let url = URL_SERVICIOS + `/deposit/${almacen.id}`;

    return this.http.put( url, almacen)
                    .pipe( map( (resp:any) => {
                      Swal.fire(
                        'Editado',
                        'El registro se ha editado correctamente',
                        'success'
                      );
                      return resp;
                    } ) )
  }


  borrarAlmacen( id ){
    let url = URL_SERVICIOS + `/deposit/${id}`;

    return this.http.delete( url)
                .pipe( map( (resp:any) => {
                  Swal.fire(
                    'Borrado',
                    'El registro ha sido borrado',
                    'success'
                  );
                  return resp;
                } ) )
  }
}
