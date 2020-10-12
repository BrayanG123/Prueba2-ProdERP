import { Injectable } from "@angular/core";
import { Compra } from "../models/compras.model";
import { URL_SERVICIOS } from "src/app/config/config";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { throwError } from "rxjs";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root",
})
export class ComprasService {

  token = localStorage.getItem('access_token');

  constructor(public http: HttpClient,
              private router: Router) {}

  cargarCompras() {
    let url = URL_SERVICIOS + "/purchases";
    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.token}`,
      "Accept": "application/json",
    });

    return this.http.get(url, { headers: reqHeader });
  }

  crearCompra(compra: Compra) {
    let url = URL_SERVICIOS + "/newPurchase";

    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.token}`,
      "Accept": "application/json",
    });

    console.log("compras.servie: ", compra);
    return this.http.post(url, {
        provider_id: compra.provider_id,
        deposit_id: compra.deposit_id,
        products: compra.products,
      }, { headers: reqHeader } ).pipe(
        map((resp: any) => {
          // console.log('ComprasService: Paso el map');
          console.log(resp);
  
          Swal.fire(
            'Creado!',
            'El registro se ha creado correctamente',
            'success'
          );
          this.router.navigateByUrl('/compras');
          return resp;
        }),
        catchError((err) => {
          console.log("Aqui el error en POstCompra: ", err);
          return throwError(err);
        })
      );
  }
}
