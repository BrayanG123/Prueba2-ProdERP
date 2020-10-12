import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/models/rol.model';

import { Usuariocrear } from 'src/app/models/usuariocrear.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { Departamento } from 'src/app/models/departamento.model';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  usuario: Usuariocrear = new Usuariocrear('', '', '', '', null, null, '');
  roles: Rol[] = [];
  dptos: Departamento[] = [];

  constructor( private _usuarioService: UsuarioService, 
               private _dptoService: DepartamentoService, 
              //  private _dptoService: Oficce
               ) 
  {
    this._usuarioService.cargarRoles().subscribe( (roles: Rol[]) => {
        this.roles = roles;
        this._dptoService.cargarDptos().subscribe( (dptos: Departamento[]) => {
            this.dptos = dptos;
        } );
    })
  }

  ngOnInit(): void {}

  cambioRol( id ) {
    this.usuario.rol_id = id;
  }

  cambioDpto( id ) {
    this.usuario.departament_id = id;
  }

  guardar( usuario: Usuariocrear ){
    // console.log(usuario);
    // console.log('el que se enviara',this.usuario);
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
      // this.usuario.rol_id = usuario.rol_id;
      // this.usuario.departament_id = usuario.departament_id;
      this.usuario.email = usuario.email;
    
      console.log('el this.usuario: ', this.usuario);

      this._usuarioService.crearUsuario( this.usuario )
          .subscribe( usuario => {
            console.log(usuario);
        } );
    })    
    
    
  }

}
