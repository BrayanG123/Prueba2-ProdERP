import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuariocrear } from 'src/app/models/usuariocrear.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  ci: string;
  nombre: string;
  apellido: string;
  sexo: string;
  rol_id: number;
  departament_id: number;
  email: string;

  constructor( public router:Router, 
               public _usuarioService: UsuarioService  
  ) { }

  ngOnInit(): void {
  }

  ingresar( forma:NgForm ){
    
    if ( forma.invalid ) return;
    console.log("aprobo el forma.invalid");
    let usuario = new Usuariocrear( 
      forma.value.ci,
      forma.value.nombre,
      forma.value.apellido,
      forma.value.sexo,
      forma.value.rol_id,
      forma.value.departament_id,
      forma.value.email,
    );
    // console.log("usuario: ", usuario);
    this._usuarioService.crearUsuario( usuario )
                        .subscribe( ok =>{ //para que se dispare hay que suscribirse
                          this.router.navigate( ['/nueva-contrasena'] );
                        } )

  }
}
