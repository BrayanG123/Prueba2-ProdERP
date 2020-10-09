import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor( @Inject(DOCUMENT) private _document ) { }

  guardarAjustes(){
    // console.log('Guardado en el localStorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes) );
  }

  cargarAjustes(){
    if ( localStorage.getItem('ajustes') ){
      this.ajustes = JSON.parse( localStorage.getItem('ajustes') );
      // console.log('Ajuste localStorage Cargado');
      this.aplicarTema( this.ajustes.theme );
    }else{
      console.log('Usando valores por Defecto');
      this.aplicarTema( this.ajustes.theme );
    }
  }

  aplicarTema( theme:string ){
    let url = `/assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', url);

    this.ajustes.theme = theme;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }

}


interface Ajustes {
  temaUrl: string;
  theme: string;
}