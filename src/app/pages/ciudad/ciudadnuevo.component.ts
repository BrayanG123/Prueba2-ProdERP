import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CiudadService } from 'src/app/services/ciudad.service';
import { Ciudad } from 'src/app/models/ciudad.model';
import { PaisService } from 'src/app/services/pais.service';
import { Pais } from 'src/app/models/pais.model';

@Component({
  selector: 'app-ciudadnuevo',
  templateUrl: './ciudadnuevo.component.html',
  styles: []
})
export class CiudadnuevoComponent implements OnInit {

  paises: Pais[] = [];
  ciudad: Ciudad = new Ciudad( '', null );
  pais: Pais = new Pais('');


  public productoForm: FormGroup;

  constructor( private fb: FormBuilder,
               public _ciudadService: CiudadService,
               public _paisService: PaisService  
  ) { }

  ngOnInit(): void {

    this.productoForm = this.fb.group({
      pais: ['', Validators.required],
      nombre: ['', Validators.required],

    });

    //para tener listas las paises al inciar el componente ciudad
    this.cargarCategorias();

  }

  guardar( ciudad: Ciudad ){
    this.ciudad.nombre = ciudad.nombre;
    
    // console.log('ciudad.ts: ', this.ciudad);

    this._ciudadService.crearCiudad( this.ciudad )
        .subscribe( ciudad => {
          // console.log(ciudad);
        } );
  }

  cargarCategorias(){
    this._paisService.cargarPaises() 
          .subscribe( (paises: Pais[]) => {
            this.paises = paises;
            // console.log(this.paises);
          } );
  }
  cambiopais( id:number ){
    this.ciudad.country_id = id;
  }

}
