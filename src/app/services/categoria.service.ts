import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { Categoria } from 'src/app/models/categoria.model';
import { map } from 'rxjs/operators';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  public categorias: Categoria[] = [];//para el obtener categoria

  constructor( public http:HttpClient,
    
  ) { }

  //--------------------- GET ----------------------------
  cargarCategorias(){
    let url = URL_SERVICIOS + '/categories';
    
    return this.http.get( url );
  }


  //--------------------- POST -----------------------------
  crearCategoria( categoria: Categoria ){
    let url = URL_SERVICIOS + '/category';
    
    // console.log('proveedor.servie: ', categoria);
    return this.http.post( url, {
            'nombre': categoria.nombre,
            'descripcion': categoria.descripcion})
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
  editarCategoria( categoria: Categoria){
    // console.log('el id: ', categoria.id );
    // console.log('la categoria ',categoria);
    let url = URL_SERVICIOS + `/category/${categoria.id}`;

    return this.http.put( url, categoria)
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
  borrarCategoria( id ){
    let url = URL_SERVICIOS + `/category/${id}`;

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

  getCategoria( id ){
    return this.cargarCategorias()
        .pipe( map( (resp:any) => {
          for (let i = 0;  i < resp.length; i++) {
            if ( resp[i].id === id ){
              return resp[i];
            }
          }
        } ) )
  }
  //ejecucion de getCategoria (desde afuera)
  // this._categoriaService.getCategoria( 2 )
  //       .subscribe( ( r: any)=> {
  //         console.log(r);
  //       } );
        
}
