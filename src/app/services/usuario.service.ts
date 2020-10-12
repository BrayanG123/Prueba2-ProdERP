import { Injectable } from "@angular/core";

import { Usuario } from "../models/usuario.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { URL_SERVICIOS } from "src/app/config/config";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Usuariocrear } from "../models/usuariocrear.model";
import Swal from 'sweetalert2';

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  usuario: Usuario = new Usuario("", "", "", "", "", "");
  access_token = localStorage.getItem('access_token');

  constructor(public http: HttpClient, 
              private router: Router) 
  {}

  login(usuario: Usuario) {
    let url = URL_SERVICIOS + "/login";

    return this.http.post(url, usuario).pipe(
      map((resp: any) => {
        console.log("La respuestaaa: ", resp);
        this.guardarStorage( resp.access_token, resp.role_name);
        return true;
      }),
      catchError((err) => {
        console.log("Catcherror ERrorrrrr");
        console.log("Aqui el error:", err);
        // return throwError( err );
        return throwError(err);
      })
    );
  }

  logout(){
    localStorage.removeItem('access_token');
    this.router.navigateByUrl('/login');
  }

  guardarStorage( access_token: string, role: string) {
    // console.log('al hace login token: ', access_token);
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("role", role);

    this.usuario.role_name = role;
    this.usuario.access_token = access_token;
    this.access_token = access_token;

    // console.log('el usuario y sus datos', this.usuario);
  }

  estalogeado() {
    return this.access_token.length > 5 ? true : false;
  }

  validarToken() {
    const token = localStorage.getItem('access_token');
    return token.length > 5 ? true : false;
  }

  cargarUsuarios() {
    let url = URL_SERVICIOS + `/user`;

    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.access_token}`,
      "Accept": "application/json",
    });

    return this.http.get(url, { headers: reqHeader }).pipe(
      map((resp: any) => {
        return resp;
      }),
      catchError((err) => {
        console.log("Catcherror ERrorrrrr");
        console.log("Aqui el error:", err);
        // return throwError( err );
        return throwError(err);
      })
    );
  }

  crearUsuario(usuario: Usuariocrear) {
    let url = URL_SERVICIOS + "/user";

    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.access_token}`,
      "Accept": "application/json",
    });

    return this.http.post(url, usuario, { headers: reqHeader } ).pipe(
      map((resp: any) => {
        console.log("POST Crear usuario: ", resp);
        Swal.fire(
          'Creado!',
          'El registro se ha creado correctamente',
          'success'
        );
        // console.log(resp.role_id);
        // console.log(resp.role_name);
        // this.guardarStorage(resp.role_id, resp.access_token, resp.role_name);
        // console.log("exito en login");
        // console.log(resp);
        return resp;
      }),
      catchError((err) => {
        console.log("Catcherror ERrorrrrr");
        console.log("Aqui el error:", err);
        // return throwError( err );
        return throwError(err);
      })
    );
  }

  crearContrasena(contrasena: string, token: string) {
    let url = URL_SERVICIOS + `/createPassword`;

    // const headers = new Headers({
    //   'Authorization': `Bearer ${token}`,
    //   'Content-Type': 'application/json',
    // })
    // 'Authorization': 'Bearer ' + JSON.parse(token),

    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
      "Accept": "application/json",
    });
    // console.log('lo que le llega al Servicio: ', contrasena);
    // console.log('lo que le llega al Servicio: ', token);
    return this.http.put(url, {'password': contrasena} , { headers: reqHeader }).pipe(
      map((resp: any) => {
        console.log("Crear_contrasena (service): ", resp);
        // console.log(resp.role_id);
        // console.log(resp.role_name);
        // this.guardarStorage(resp.role_id, resp.access_token, resp.role_name);
        // console.log("exito en login");
        // console.log(resp);
        return true;
      }),
      catchError((err) => {
        console.log("Catcherror ERrorrrrr");
        console.log("Aqui el error:", err);
        // return throwError( err );
        return throwError(err);
      })
    );
  }

  cargarRoles(){  
    let url = URL_SERVICIOS + `/roles`;

    return this.http.get(url).pipe(
      map((resp: any) => {
        return resp;
      }),
      catchError((err) => {
        console.log("Catcherror ERrorrrrr");
        console.log("Aqui el error:", err);
        // return throwError( err );
        return throwError(err);
      })
    );
  }
}
