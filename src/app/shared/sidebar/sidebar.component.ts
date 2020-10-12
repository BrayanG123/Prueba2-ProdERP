import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/shared/sidebar.service';
// import { UsuarioService } from 'src/app/services/usuario.service';
// import { Usuario } from 'src/app/models/usuario.model';
import { TemasService } from 'src/app/services/shared/temas.service';

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
              //  private _usuarioService: UsuarioService
  ) {
    // this.escucharCambioSidebar();
    this.cargarSidebarTemaDefecto();
    _temaService.changeEmittedSidebar$.subscribe( text => {
          // console.log(text);
          this.cambiarTema(text);
    });

    

    this.role = localStorage.getItem('role');
    this.definirRole();

    // console.log(this.role);
   }

  ngOnInit(): void {
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
      case 'Compra':
        this.rolcompra = true;
        break;
      case 'Venta':
        this.rolventa = true;
        break;
      case 'Almacen':
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
