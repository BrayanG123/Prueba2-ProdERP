import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemasService {

  tema: string = 'navbar-dark navbar-primary'
  temaSidebar: string = 'sidebar-dark-info'
  //temas del Navbar
  // navbar_dark_skins = [
  // todos estos van anteponiendo 'navbar-dark'  
  navbar_dark_skins = [
    'navbar-primary',
    'navbar-secondary',
    'navbar-info',
    'navbar-success',
    'navbar-danger',
    'navbar-indigo',
    'navbar-purple',
    'navbar-pink',
    'navbar-navy',
    'navbar-lightblue',
    'navbar-teal',
    'navbar-cyan',
    'navbar-dark',  //excepto este: va solo 
    'navbar-gray-dark',
    'navbar-gray',
  ]

  //skins: pellejo, piel
  // todos estos van anteponiendo 'navbar-light'  
  navbar_light_skins = [
    'navbar-light',  //excepto este: va solo 
    'navbar-warning',
    'navbar-white',
    'navbar-orange',
  ]

  // Sidebar Oscuro y Blanco
  sidebar_skins = [
    'sidebar-dark-primary',
    'sidebar-dark-warning',
    'sidebar-dark-info',
    'sidebar-dark-danger',
    'sidebar-dark-success',
    'sidebar-dark-indigo',
    'sidebar-dark-lightblue',
    'sidebar-dark-navy',
    'sidebar-dark-purple',
    'sidebar-dark-fuchsia',
    'sidebar-dark-pink',
    'sidebar-dark-maroon',
    'sidebar-dark-orange',
    'sidebar-dark-lime',
    'sidebar-dark-teal',
    'sidebar-dark-olive',
    'sidebar-light-primary',
    'sidebar-light-warning',
    'sidebar-light-info',
    'sidebar-light-danger',
    'sidebar-light-success',
    'sidebar-light-indigo',
    'sidebar-light-lightblue',
    'sidebar-light-navy',
    'sidebar-light-purple',
    'sidebar-light-fuchsia',
    'sidebar-light-pink',
    'sidebar-light-maroon',
    'sidebar-light-orange',
    'sidebar-light-lime',
    'sidebar-light-teal',
    'sidebar-light-olive'
  ]

  // temas del sidebar
  sidebar_colors = [
    'bg-primary',
    'bg-warning',
    'bg-info',
    'bg-danger',
    'bg-success',
    'bg-indigo',
    'bg-lightblue',
    'bg-navy',
    'bg-purple',
    'bg-fuchsia',
    'bg-pink',
    'bg-maroon',
    'bg-orange',
    'bg-lime',
    'bg-teal',
    'bg-olive'
  ]

  //texto del sidebar
  accent_colors = [
    'accent-primary',
    'accent-warning',
    'accent-info',
    'accent-danger',
    'accent-success',
    'accent-indigo',
    'accent-lightblue',
    'accent-navy',
    'accent-purple',
    'accent-fuchsia',
    'accent-pink',
    'accent-maroon',
    'accent-orange',
    'accent-lime',
    'accent-teal',
    'accent-olive'
  ]
  
  // asa: Observable<string>;
  constructor() { }

  // Observable string sources
  private emitChangeSource = new Subject<any>();
  private emitChangeSidebar = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  changeEmittedSidebar$ = this.emitChangeSidebar.asObservable();
  // Service message commands
  // emitChange(change: any) {
  //     this.emitChangeSource.next(change);
  // }
  emitChange(change: any) {
      this.emitChangeSource.next(change);
  }

  emitChangeSide(change: any) {
      this.emitChangeSidebar.next(change);
  }
  
  //para que retorne el tema por defecto
  getTemaNavbar(){
    // console.log('getTemaNavbar ',this.tema);
    return this.tema;
  }
  getTemaSidebar(){
    return this.temaSidebar;
  }

  asignarTemaNavbar( idx:number ){
    if ( idx == 12){
      this.tema = this.navbar_dark_skins[idx];
    }else{
      this.tema = 'navbar-dark ' + this.navbar_dark_skins[idx];
    }  
    if ( idx == 15 ) this.tema = this.navbar_light_skins[idx - 15 ];
    if ( idx > 15 )  this.tema = 'navbar-light ' + this.navbar_light_skins[idx - 15];
    
    // this.getTemaNavbar();
    return this.tema;
  }

  asignarTemaSidebar( idx:number ){
    this.temaSidebar =  this.sidebar_skins[idx];
    console.log('temaSidebar: ', this.temaSidebar);
    return this.temaSidebar;
  }

  // asignarTemaSidebar( idx:number ){
  //   this.tema = this.navbar_dark_skins[idx];
  // }
}
