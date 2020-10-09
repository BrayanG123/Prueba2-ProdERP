import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto.model';
import { URL_SERVICIOS } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor( public http:HttpClient 
  
  ) { }

  cargarProductos(){
    let url = URL_SERVICIOS + '/products';
    
    return this.http.get( url );
  }

  crearProducto( producto: Producto ){
    let url = URL_SERVICIOS + '/product';
    
    // console.log('producto.servie: ', producto);
    return this.http.post( url, producto
    //   {
    //         'category_id': producto.category_id,
    //         'nombre': producto.nombre,
    //         'descripcion': producto.descripcion,
    //         'precio': producto.precio, 
    //         'costo': producto.costo 
    // }
     ).pipe( map((resp: any) => {
          // console.log(resp);
          Swal.fire(
            'Creado',
            'El registro se ha creado correctamente',
            'success'
          );
        }));
  }

  editarProducto( producto: Producto ){
    let url = URL_SERVICIOS + `/product/${producto.id}`;

    return this.http.put( url, producto)
                    .pipe( map( (resp:any) => {
                      Swal.fire(
                        'Editado',
                        'El registro se ha editado correctamente',
                        'success'
                      );
                      return resp;
                    } ) )
  }

  borrarProducto( id ){
    let url = URL_SERVICIOS + `/product/${id}`;

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
