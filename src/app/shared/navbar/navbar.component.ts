import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TemasService } from 'src/app/services/shared/temas.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  public tema = '';
  // public asas: Observable<string>;

  constructor( private _temaService: TemasService ) { 

    this.escucharCambios(); //en realidad solo es para cargar el tema por defecto (no hace cambios de nada)
    _temaService.changeEmitted$.subscribe( text => {
          // console.log(text);
          this.cambiarTema(text);
    });
  }

  ngOnInit(): void {
    
  }

  cambiarTema( id:number ) {
    this.tema = this._temaService.asignarTemaNavbar( id );
    // this.tema = this._temaService.getTemaNavbar();
      // this.tema = tema;
      // console.log('la resp', tema);
    // console.log('el this.tema', this.tema);
    
  }

  escucharCambios(){
    this.tema = this._temaService.getTemaNavbar();
  }
  

  // mostrarTema(){
  //   console.log(this.tema);
  // }

}
