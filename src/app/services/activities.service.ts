import { Injectable } from '@angular/core';

import { URL_SERVICIOS } from '../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  token = localStorage.getItem('access_token')

  constructor( public http: HttpClient ) { }

  getActivities(){
    let url = URL_SERVICIOS + '/activities';
    // console.log('el token: ', this.token);
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.token}`,
      "Accept": "application/json",
    });
    
    return this.http.get( url, { headers: reqHeader } );
  }
}
