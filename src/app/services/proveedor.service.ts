import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from 'src/app/models/proveedor.model';
import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor( public http:HttpClient,
                 
  ) { }

  
  cargarProveedores(){
    let url = URL_SERVICIOS + '/providers';
    
    return this.http.get( url );
  }

  crearProveedor( proveedor: Proveedor ){
    let url = URL_SERVICIOS + '/provider';
    
    // console.log('proveedor.servie: ', proveedor);
    return this.http.post( url, {
            'empresa': proveedor.empresa,
            'direccion': proveedor.direccion,
            'telefono': proveedor.telefono } )
        .pipe( map((resp: any) => {
          // console.log(resp);
          Swal.fire(
            'Creado!',
            'El registro se ha creado correctamente',
            'success'
          );
          return resp.medico;
        }));
  }

  editarProveedor( proveedor: Proveedor ){
    let url = URL_SERVICIOS + `/provider/update/${proveedor.id}`;

    return this.http.put( url, proveedor)
                    .pipe( map( (resp:any) => {
                      Swal.fire(
                        'Editado',
                        'El registro se ha editado correctamente',
                        'success'
                      );
                      return resp;
                    } ) )
  }

  borrarProveedor( id: string ){
    let url = URL_SERVICIOS + `/provider/delete/${id}`;

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
