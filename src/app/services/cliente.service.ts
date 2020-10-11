import { Injectable } from '@angular/core';

import { URL_SERVICIOS } from 'src/app/config/config';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // public categorias: Categoria[] = [];//para el obtener categoria

  constructor( public http:HttpClient,
    
  ) { }

  //--------------------- GET ----------------------------
  cargarClientes(){
    let url = URL_SERVICIOS + '/clients';
    
    return this.http.get( url );
  }


  //--------------------- POST -----------------------------
  crearCliente( cliente: Cliente ){
    let url = URL_SERVICIOS + '/client';
    
    // console.log('proveedor.servie: ', cliente);
    return this.http.post( url, cliente)
        .pipe( map((resp: any) => {
          // console.log(resp);
          Swal.fire(
            'Creado',
            'El registro se ha creado correctamente',
            'success'
          );
          return resp;
        }));
  }

  //--------------------- PUT -----------------------------
  // editarCategoria( categoria: Categoria){
  //   // console.log('el id: ', categoria.id );
  //   // console.log('la categoria ',categoria);
  //   let url = URL_SERVICIOS + `/category/${categoria.id}`;

  //   return this.http.put( url, categoria)
  //                   .pipe( map( (resp:any) => {
  //                     Swal.fire(
  //                       'Editado',
  //                       'El registro se ha editado correctamente',
  //                       'success'
  //                     );
  //                     return resp;
  //                   } ) )
          
  // }

  //--------------------- DELETE -----------------------------
  // borrarCategoria( id ){
  //   let url = URL_SERVICIOS + `/category/${id}`;

  //   return this.http.delete( url )
  //               .pipe( map( (resp:any) => {
  //                 Swal.fire(
  //                   'Borrado',
  //                   'El registro ha sido borrado',
  //                   'success'
  //                 );
  //                 return resp;
  //               } ) )
  // }

  getCategoria( id ){
    // return this.cargarCategorias()
    //     .pipe( map( (resp:any) => {
    //       for (let i = 0;  i < resp.length; i++) {
    //         if ( resp[i].id === id ){
    //           return resp[i];
    //         }
    //       }
    //     } ) )
  }
}
