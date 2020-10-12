import { Component, OnInit } from '@angular/core';
import { Usuarioget } from 'src/app/models/usuarioget.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  public cargando: boolean = true;
  public usuarios: Usuarioget[] = [];
  public usuario: Usuarioget;

  constructor( private _usuarioService: UsuarioService,
               private router: Router
  ) 
  {
      // this._usuarioService.cargarUsuarios().subscribe( (usuarios:Usuarioget[]) => {
      //   console.log(usuarios);
      //   // this.usuarios = usuarios;
      //   this.cargando = false;
      // } )
      this._usuarioService.cargarUsuarios().subscribe( (usuario:Usuarioget) => {
        console.log(usuario);
        this.usuario = usuario;
        this.cargando = false;
      } )
  }

  ngOnInit(): void {
  }

  editarUsuario( usuario ){

  }

  borrarUsuario( usuario ){

  }

}
