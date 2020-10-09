import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Sucursal } from 'src/app/models/sucursal.model';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  constructor( public http:HttpClient ) { }

  //--------------------- GET ----------------------------
  cargarSucursales(){
    let url = URL_SERVICIOS + '/offices';
    
    return this.http.get( url );
  }

  //--------------------- POST -----------------------------
  crearSucursal( sucursal: Sucursal ){
    let url = URL_SERVICIOS + '/office';
    
    // console.log('proveedor.servie: ', sucursal);
    return this.http.post( url, sucursal)
        .pipe( map((resp: any) => {
          console.log(resp);
          Swal.fire(
            'Creado',
            'El registro se ha creado correctamente',
            'success'
          );
        }));
  }

  //--------------------- PUT -----------------------------
  editarSucursal( sucursal: Sucursal){
    // console.log('el id: ', sucursal.id );
    // console.log('la sucursal ',sucursal);
    let url = URL_SERVICIOS + `/office/${sucursal.id}`;

    return this.http.put( url, sucursal)
                    .pipe( map( (resp:any) => {
                      Swal.fire(
                        'Editado',
                        'El registro se ha editado correctamente',
                        'success'
                      );
                      return resp;
                    } ) )
          
  }

  //--------------------- DELETE -----------------------------
  borrarSucursal( id ){
    let url = URL_SERVICIOS + `/office/${id}`;

    return this.http.delete( url )
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
