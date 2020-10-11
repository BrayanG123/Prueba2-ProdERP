import { Component, OnInit } from '@angular/core';

import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientenuevo',
  templateUrl: './clientenuevo.component.html',
  styles: []
})
export class ClientenuevoComponent implements OnInit {

  cliente: Cliente = new Cliente('', '', '', '');

  constructor( public _clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  guardar( cliente: Cliente ){
    

    this.cliente.ci = cliente.ci;
    this.cliente.nombre = cliente.nombre;
    this.cliente.apellido = cliente.apellido;
    this.cliente.telefono = cliente.telefono;
    

    this._clienteService.crearCliente( this.cliente ).subscribe( resp => {
          console.log(cliente);
    } );
  }


}
