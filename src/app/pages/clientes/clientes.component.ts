import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: []
})
export class ClientesComponent implements OnInit {

  public cargando: boolean = true;
  public clientes: Cliente[] = [];

  constructor( 
    private _clienteServices: ClienteService,
               private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(){
    this._clienteServices.cargarClientes().subscribe( (clientes:any) => {
          // console.log(productos);
          this.clientes = clientes;
          this.cargando = false;
    } ) 
  }

  editarCliente( cliente ){

  }

  borrarCliente( cliente ){
    
  }

}
