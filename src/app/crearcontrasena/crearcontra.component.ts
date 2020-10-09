import { Component, OnInit } from '@angular/core';

//para recibir el parametro id por url
import { ActivatedRoute, Router } from '@angular/router';
// import jwt_decode from 'jwt-decode';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crearcontra',
  templateUrl: './crearcontra.component.html',
  styles: []
})
export class CrearcontraComponent implements OnInit {

  token: string = '';
  contrasena: string = '';

  constructor( private activatedRoute: ActivatedRoute, 
               private _usuarioService: UsuarioService  
  ) { 
    this.activatedRoute.params.subscribe( params => {
      // console.log(params['id']);
      this.token = params['token'];

    } );
  }

  ngOnInit(): void {
  }

  ingresar( f:any ){
    // console.log('el token: ', this.token);
    // return;
    console.log('el f: ', f.value.password);
    this.contrasena = f.value.password;
    this._usuarioService.crearContrasena( this.contrasena, this.token )
        .subscribe( respuesta => {
          console.log( respuesta );
        })
    // console.log('con la funcion atob(): ');
    // console.log(atob(this.token.split('.')[1]));
    // console.log('aqui el token decodificado');
    // this.getDecodedAccessToken( this.token );
  }

  // getDecodedAccessToken(token: string): any {
  //   try{
  //       console.log(jwt_decode(token));
  //   }
  //   catch(Error){
  //       return null;
  //   }
  // }

}
