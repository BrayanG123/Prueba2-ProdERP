import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { TemasService } from 'src/app/services/shared/temas.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  @Output() itemSeleccionado : EventEmitter<number>;
  constructor( public _ajustes:SettingsService, 
               private _temaService: TemasService  
  ) {
    // this._ajustes.cargarAjustes();
    this.itemSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
    // this.colocarCheck();
  }

  changeTheme( id:number ){
    this._temaService.emitChange(id);
    // this.itemSeleccionado.emit( id );
    // console.log(id);
    // linkTheme.setAttribute('href', url);
  }

  changeThemeSidebar( id:number ){
    this._temaService.emitChangeSide(id);
  }
  
  // cambiarColor( tema:string, link:any ){
  //   // console.log(link);
  //   this.aplicarCheck(link);
    
  //   this._ajustes.aplicarTema(tema);
  // }

  // aplicarCheck( link:any ){
  //   let selectores:any = document.getElementsByClassName('selector');
  //   for ( let selector of selectores ){
  //     selector.classList.remove('working');
  //   }
  //   link.classList.add( 'working' );
  // }

  // colocarCheck(){
  //   let selectores:any = document.getElementsByClassName('selector');

  //   let tema = this._ajustes.ajustes.theme;

  //   for ( let selector of selectores ){
  //     if ( selector.getAttribute('data-theme') === tema ){
  //       selector.classList.add( 'working' );
  //       break;
  //     }
  //   }
  // }

}
