import { Component, OnInit } from '@angular/core';
import { Comprasget } from 'src/app/models/compraget.model';
import { ComprasService } from 'src/app/services/compras.service';

import { Compra } from 'src/app/models/compras.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styles: []
})
export class ComprasComponent implements OnInit {

  public compras: Comprasget[] = []; 

  constructor( public _compraService: ComprasService, 
               private router:Router
  ) { }

  ngOnInit(): void {
    this.cargarCompras();
  }

  cargarCompras(){
    this._compraService.cargarCompras()
          .subscribe( (compras:any) => {
              console.log(compras);
              this.compras = compras;
          } );
  }

  verCompra( compra:Compra ){
    this.router.navigate( [ '/compraver', compra.id ] );
    // console.log('el id: ', compra.id);
    // console.log('la compra: ', compra);
  }

}
