import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ciudad } from 'src/app/models/ciudad.model';
import { Pais } from 'src/app/models/pais.model';
import { CiudadService } from 'src/app/services/ciudad.service';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styles: []
})
export class CiudadComponent implements OnInit {

  public ciudades: Ciudad[] = [];
  public paises: Pais[] = [];
  public paisesArreglo: Pais[] = [];
  public cargando: boolean = true;

  constructor( public _ciudadService: CiudadService,
               private _paisService: PaisService
              //  private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarCiudades(); //y tambien paises
  }

  cargarCiudades(){
    this._ciudadService.cargarCiudades().subscribe( (ciudades:any) => {
          this.ciudades = ciudades;

          this._paisService.cargarPaises().subscribe( (paises:any) => {
                this.paises = paises;
                // this.ordenarPaises();
                this.cargando = false;

          } ); 
    } );

  }

  // ordenarPaises(){
  //   let c = 0;
  //   for (let i = 0; i < this.ciudades.length; i++) {
  //     if ( this.paises[c].id == this.ciudades[i].country_id  ){
  //       this.paisesArreglo.push( this.paises[c] );
  //       c++;
  //     }
      
  //   }
  // }


  // editarCategoria( categoria: Categoria){
  //   // console.log(categoria);
  //   this.router.navigate( [ '/categeditar', categoria.id ] );
    
  // }

  // borrarCategoria( categoria: Categoria){
    
  //   Swal.fire({
  //     title: 'Estas seguro?',
  //     text: "Se borrara el registro",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     cancelButtonText: 'Cancelar',
  //     confirmButtonText: 'Borrar'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this._ciudadService.borrarCategoria( categoria.id )
  //               .subscribe( () => this.cargarCategorias() )
  //     }
  //   })

  // }

}
