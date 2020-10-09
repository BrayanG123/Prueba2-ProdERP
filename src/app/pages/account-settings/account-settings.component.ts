import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes:SettingsService ) {
    // this._ajustes.cargarAjustes();
  }

  ngOnInit(): void {
    // this.colocarCheck();
  }

  changeTheme( theme:string ){
    // console.log(theme);
    const linkTheme = document.querySelector('#theme');
    const url = `./assets/css/colors/${theme}.css`;
    console.log(linkTheme);

    linkTheme.setAttribute('href', url);
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
