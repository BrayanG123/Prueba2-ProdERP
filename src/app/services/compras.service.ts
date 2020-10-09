import { Injectable } from "@angular/core";
import { Compra } from "../models/compras.model";
import { URL_SERVICIOS } from "src/app/config/config";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ComprasService {
  constructor(public http: HttpClient) {}

  cargarCompras() {
    let url = URL_SERVICIOS + "/purchases";

    return this.http.get(url);
  }

  crearCompra(compra: Compra) {
    let url = URL_SERVICIOS + "/newPurchase";

    console.log("proveedor.servie: ", compra);
    return this.http
      .post(url, {
        provider_id: compra.provider_id,
        deposit_id: compra.deposit_id,
        products: compra.products,
      })
      .pipe(
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
