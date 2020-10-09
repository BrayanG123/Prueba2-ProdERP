import { Component, OnInit } from "@angular/core";

import { UsuarioService } from "src/app/services/usuario.service";

@Component({
  selector: "app-crearcontra",
  templateUrl: "./crearcontra.component.html",
  styles: [],
})
export class CrearcontraComponent implements OnInit {
  // categoria: Categoria = new Categoria('', '');
  contrasena: string = "";

  constructor(public _usuarioService: UsuarioService) {}

  ngOnInit(): void {}

  guardar(contrasena: string) {
    this.contrasena = contrasena;

    // this._usuarioService.crearContrasena( this.contrasena )
    //     .subscribe( respuesta => {
    //       console.log(respuesta);
    //     } );
  }
}
