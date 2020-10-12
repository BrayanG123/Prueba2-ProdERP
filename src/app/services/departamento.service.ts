import { Injectable } from '@angular/core';
import { Departamento } from '../models/departamento.model';
import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor( public http:HttpClient, ) { }

  cargarDptos(){
    let url = URL_SERVICIOS + '/departaments';
    
    return this.http.get( url );
  }


  //--------------------- POST -----------------------------
  crearDpto( dpto: Departamento ){
    let url = URL_SERVICIOS + '/departament';
    
    return this.http.post( url, dpto)
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
