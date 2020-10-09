import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;

  constructor( public router:Router, 
               public _usuarioService: UsuarioService  
  ) { }

  ngOnInit(): void {
  }

  ingresar( forma:NgForm ){
    
    if ( forma.invalid ) return;
    console.log("aprobo el forma.invalid");
    let usuario = new Usuario( 
      forma.value.email,
      forma.value.password
    );
    console.log("usuario: ", usuario);
    this._usuarioService.login( usuario )
                        .subscribe( ok =>{ //para que se dispare hay que suscribirse
                          this.router.navigate( ['/dashboard'] );
                        } )

  }
}
