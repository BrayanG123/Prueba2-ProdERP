import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/shared/sidebar.service';
// import { UsuarioService } from 'src/app/services/usuario.service';
// import { Usuario } from 'src/app/models/usuario.model';
import { TemasService } from 'src/app/services/shared/temas.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  role: string = ''; 
  administrador = false;
  rolcompra = false;
  rolventa = false;
  rolalmacen = false;

  public temaSidebar: string = '';

  constructor( public _sidebar: SidebarService,
               private _temaService: TemasService,
               private _usuarioService: UsuarioService
  ) {
    this.cargarSidebarTemaDefecto();
    _temaService.changeEmittedSidebar$.subscribe( text => {
          this.cambiarTema(text);
    });

    this.role = localStorage.getItem('role');
    this.definirRole();
   }

  ngOnInit(): void {
  }

  logout(){
    this._usuarioService.logout();
  }

  cargarSidebarTemaDefecto(){
    this.temaSidebar = this._temaService.getTemaSidebar();
  }

  cambiarTema( id:number ) {
    this.temaSidebar = this._temaService.asignarTemaSidebar( id );
    console.log('SidebarComponente: ', this.temaSidebar);
  }

  definirRole(){
    switch (this.role) {
      case 'Administrador':
        this.administrador = true;
        break;
      case 'Encargado Compra':
        this.rolcompra = true;
        break;
      case 'Encargado Venta':
        this.rolventa = true;
        break;
      case 'Encargado Almacen':
        this.rolalmacen = true;
        break;
      default:
        this.administrador = false;
        this.rolcompra = false;
        this.rolventa = false;
        this.rolalmacen = false;
        console.log('Posiblemente no logeado; No se encuentra el rol');
        break;  
    }
  }

}
