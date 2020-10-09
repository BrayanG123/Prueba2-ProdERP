import { Component, OnInit } from '@angular/core';

import { Usuariocrear } from 'src/app/models/usuariocrear.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  usuario: Usuariocrear = new Usuariocrear('', '', '', '', null, null, '');

  constructor( public _usuarioService: UsuarioService 
    
  ) { 
  }

  ngOnInit(): void {
    
  }

  // crearProveedor( usuario: Usuariocrear ){
  //   this.usuario. = usuario.;
  //   this.usuario. = usuario.;
  //   this.usuario. = usuario.;

  //   this._usuarioService.crearProveedor( this.usuario )
  //       .subscribe( usuario => {
  //         console.log(usuario);
  //       } );

    
  // }

  guardar( usuario: Usuariocrear ){
    console.log(usuario);
    // return;

    Swal.fire({
      title: 'Desea registrar el nuevo usuario?',
      // text: "Desea editar el proveedor existente?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      this.usuario.ci = usuario.ci;
      this.usuario.nombre = usuario.nombre;
      this.usuario.apellido = usuario.apellido;
      this.usuario.sexo = usuario.sexo;
      this.usuario.rol_id = usuario.rol_id;
      this.usuario.departament_id = usuario.departament_id;
      this.usuario.email = usuario.email;
    
      console.log('el this.usuario: ', this.usuario);

      this._usuarioService.crearUsuario( this.usuario )
          .subscribe( usuario => {
            console.log(usuario);
        } );
    })    
    
    
  }

}
