import { Injectable } from "@angular/core";
import { Compra } from "../models/compras.model";
import { URL_SERVICIOS } from "src/app/config/config";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ComprasService {

  token = localStorage.getItem('access_token');

  constructor(public http: HttpClient) {}

  cargarCompras() {
    let url = URL_SERVICIOS + "/purchases";
    return this.http.get(url);
  }

  crearCompra(compra: Compra) {
    let url = URL_SERVICIOS + "/newPurchase";

    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.token}`,
      "Accept": "application/json",
    });

    console.log("proveedor.servie: ", compra);
    return this.http.post(url, {
        provider_id: compra.provider_id,
        deposit_id: compra.deposit_id,
        products: compra.products,
      }, { headers: reqHeader } ).pipe(
        map((resp: any) => {
          // console.log('ComprasService: Paso el map');
          console.log(resp);

          // Swal.fire(
          //   'Creado!',
          //   medico.nombre,
          //   'success'
          // );
          // return resp.medico;
        }),
        catchError((err) => {
          console.log("Aqui el error en POstCompra: ", err);
          return throwError(err);
        })
      );
  }
}
