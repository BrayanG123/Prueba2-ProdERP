import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CProductos } from 'src/app/models/compproductos.model';

import { Compra } from 'src/app/models/compras.model';
import { ComprasService } from 'src/app/services/compras.service';
// import { Compraprod } from 'src/app/models/compraprod.model';

@Component({
  selector: 'app-compraver',
  templateUrl: './compraver.component.html',
  styles: []
})
export class CompraverComponent implements OnInit {

  compra: Compra;
  public productos: [];
  public productoscomprados: CProductos[];
  id = 0;
  public cargando: boolean = true;

  constructor( private activatedRoute: ActivatedRoute,
               private _comprasService: ComprasService,
               private router:Router,
  ) { 
    this.activatedRoute.params.subscribe( params => {
      // console.log(params['id']);
      this.id = Number(params['id']);
    } );

    this._comprasService.cargarCompras()
          .subscribe( (compras: Compra[]) => {
            this.cargando = false;
            this.cargarData( compras );
          } )
  }

  ngOnInit(): void {
  }

  cargarData( compras:Compra[] ){
    // let id1: Number;
    // let id2: Number;
    // return;
    for (let i = 0;  i < compras.length; i++) {
      // id1 = compras[i].id
      if ( compras[i].id === this.id ){      
        this.compra = compras[i];
        console.log(this.compra);
        // this.productoscomprados = this.compra.productos;
        // console.log(this.compra.products);
        // this.productos = this.compra.products;
        
        break;
      }
    }

  }


}
