import { Injectable } from '@angular/core';

import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  token = localStorage.getItem('access_token');

  constructor( public http: HttpClient ) { 

    this.cargarVentas();

  }

  cargarVentas(){
    let url = URL_SERVICIOS + '/reportSaleNotes';
    // console.log('el token: ', this.token);

    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.token}`,
      "Accept": "application/json",
    });

    
    return this.http.get( url, { headers: reqHeader } );
  }
}
