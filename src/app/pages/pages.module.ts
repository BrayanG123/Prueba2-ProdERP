import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { PAGES_ROUTES } from './pages.routes';

// para los componentes compartidos
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { ComprasComponent } from './compras/compras.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';


import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ProveedorcrearComponent } from './proveedores/proveedorcrear.component';
import { ComprasnuevoComponent } from './compras/comprasnuevo.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategorianuevoComponent } from './categoria/categorianuevo.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductonuevoComponent } from './producto/productonuevo.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ProveeditComponent } from './proveedores/proveedit.component';
import { CategeditarComponent } from './categoria/categeditar.component';
import { ProductoeditComponent } from './producto/productoedit.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { AlmaceneditComponent } from './almacen/almacenedit.component';
import { AlmacennuevoComponent } from './almacen/almacennuevo.component';
import { DptoComponent } from './dpto/dpto.component';
import { DptoeditComponent } from './dpto/dptoedit.component';
import { DptonuevoComponent } from './dpto/dptonuevo.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { SucursalnuevoComponent } from './sucursal/sucursalnuevo.component';
import { SucursaleditComponent } from './sucursal/sucursaledit.component';
import { CompraverComponent } from './compras/compraver.component';
import { UsuarioNuevoComponent } from './usuarios/usuario-nuevo.component';
import { CrearcontraComponent } from './usuarios/crearcontra.component';
import { VentasComponent } from './ventas/ventas.component';
import { VentasnuevoComponent } from './ventas/ventasnuevo.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientenuevoComponent } from './clientes/clientenuevo.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { CiudadnuevoComponent } from './ciudad/ciudadnuevo.component';
import { PaisComponent } from './pais/pais.component';
import { PaisnuevoComponent } from './pais/paisnuevo.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        UsuariosComponent,
        ProfileComponent,
        ComprasComponent,
        ProveedoresComponent,
        ProveedorcrearComponent,
        ComprasnuevoComponent,
        CategoriaComponent,
        CategorianuevoComponent,
        ProductoComponent,
        ProductonuevoComponent,
        AccountSettingsComponent,
        ProveeditComponent,
        CategeditarComponent,
        ProductoeditComponent,
        AlmacenComponent,
        AlmaceneditComponent,
        AlmacennuevoComponent,
        DptoComponent,
        DptoeditComponent,
        DptonuevoComponent,
        SucursalComponent,
        SucursalnuevoComponent,
        SucursaleditComponent,
        CompraverComponent,
        UsuarioNuevoComponent,
        CrearcontraComponent,
        VentasComponent,
        VentasnuevoComponent,
        ClientesComponent,
        ClientenuevoComponent,
        ActivitiesComponent,
        CiudadComponent,
        CiudadnuevoComponent,
        PaisComponent,
        PaisnuevoComponent,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,

        CommonModule,  //Para los ngFor, NngIf
        FormsModule,  //Para la caja de bananas
        ReactiveFormsModule,
    ],
    exports: [
        DashboardComponent,
        UsuariosComponent,
        AccountSettingsComponent
    ],
    
    
})
export class PagesModule {}