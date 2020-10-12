import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../models/pais.model';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  public paises: Pais[] = [];//para el obtener paises

  constructor( public http:HttpClient,
    
  ) { }

  //--------------------- GET ----------------------------
  cargarPaises(){
    let url = URL_SERVICIOS + '/countries';
    
    return this.http.get( url );
  }


  //--------------------- POST -----------------------------
  crearPais( pais: Pais ){
    let url = URL_SERVICIOS + '/country';
    
    return this.http.post( url, pais)
        .pipe( map((resp: any) => {
          console.log(resp);
          Swal.fire(
            'Creado',
            'El registro se ha creado correctamente',
            'success'
          );
        }));
  }

}
