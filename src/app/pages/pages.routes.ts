import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ComprasComponent } from './compras/compras.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProveedorcrearComponent } from './proveedores/proveedorcrear.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategorianuevoComponent } from './categoria/categorianuevo.component';
import { ComprasnuevoComponent } from './compras/comprasnuevo.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductonuevoComponent } from './producto/productonuevo.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CategeditarComponent } from './categoria/categeditar.component';
import { ProveeditComponent } from './proveedores/proveedit.component';
import { ProductoeditComponent } from './producto/productoedit.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { AlmacennuevoComponent } from './almacen/almacennuevo.component';
import { AlmaceneditComponent } from './almacen/almacenedit.component';
import { DptoComponent } from './dpto/dpto.component';
import { DptonuevoComponent } from './dpto/dptonuevo.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { SucursalnuevoComponent } from './sucursal/sucursalnuevo.component';
import { SucursaleditComponent } from './sucursal/sucursaledit.component';
import { CompraverComponent } from './compras/compraver.component';
import { UsuarioNuevoComponent } from './usuarios/usuario-nuevo.component';
import { CrearcontraComponent } from './usuarios/crearcontra.component';

import { AuthGuard } from '../guards/auth.guard';
import { VentasComponent } from './ventas/ventas.component';
import { VentasnuevoComponent } from './ventas/ventasnuevo.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientenuevoComponent } from './clientes/clientenuevo.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { CiudadnuevoComponent } from './ciudad/ciudadnuevo.component';
import { ReporteComponent } from './reporte/reporte.component';
import { AsasComponent } from './reporte/asas.component';
import { ReportPurchaseMesComponent } from './reporte/report-purchase-mes.component';
import { ReportPurchaseBillsComponent } from './reporte/report-purchase-bills.component';
import { ReportSaleBillsComponent } from './reporte/report-sale-bills.component';
import { ReportPurchaseNotessComponent } from './reporte/report-purchase-notess.component';
import { ReportSaleNotesComponent } from './reporte/report-sale-notes.component';
import { ReportSaleMesComponent } from './reporte/report-sale-mes.component';




const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ AuthGuard ],
        children: [
            { path: 'dashboard', component: DashboardComponent },

            { path: 'usuarios', component: UsuariosComponent },
            { path: 'usuarios-nuevo', component: UsuarioNuevoComponent },
            // { path: 'nueva-contraseña/:token', component: CrearcontraComponent },

            { path: 'compras', component: ComprasComponent },
            { path: 'comprasnuevo', component: ComprasnuevoComponent },
            { path: 'compraver/:id', component: CompraverComponent },

            { path: 'producto', component: ProductoComponent },
            { path: 'productonuevo', component: ProductonuevoComponent },
            { path: 'producto-edit/:id', component: ProductoeditComponent },

            { path: 'clientes', component: ClientesComponent },
            { path: 'clientes-nuevo', component: ClientenuevoComponent },

            { path: 'proveedores', component: ProveedoresComponent },
            { path: 'proveedorcrear', component: ProveedorcrearComponent },
            { path: 'proveedit/:id', component: ProveeditComponent },

            { path: 'categorias', component: CategoriaComponent },
            { path: 'categorianuevo', component: CategorianuevoComponent },
            { path: 'categeditar/:id', component: CategeditarComponent },

            { path: 'almacenes', component: AlmacenComponent },
            { path: 'almacenes-nuevo', component: AlmacennuevoComponent },
            { path: 'almaceneditar/:id', component: AlmaceneditComponent },
            
            { path: 'ciudades', component: CiudadComponent },
            { path: 'ciudades-nuevo', component: CiudadnuevoComponent },

            { path: 'ventas', component: VentasComponent },
            { path: 'ventas-nuevo', component: VentasnuevoComponent },

            //modificando esto (devolver a como estaba despues) El original es dpto
            { path: 'dptos', component: DptoComponent },
            { path: 'dptos-nuevo', component: DptonuevoComponent },
            
            { path: 'sucursal', component: SucursalComponent },
            { path: 'sucursal-nuevo', component: SucursalnuevoComponent },
            { path: 'sucursaleditar/:id', component: SucursaleditComponent },

            { path: 'profile', component: ProfileComponent },

            { path: 'activities', component: ActivitiesComponent },

            { path: 'reporte', component: ReporteComponent },
            { path: 'reportPurchaseBills', component: ReportPurchaseBillsComponent },
            { path: 'reportSaleBills', component: ReportSaleBillsComponent },
            { path: 'reportPurchaseNotes', component: ReportPurchaseNotessComponent },
            { path: 'reportSaleNotes', component: ReportSaleNotesComponent },
            { path: 'reportSaleMes', component: ReportSaleMesComponent },
            { path: 'reportPurchaseMes', component: ReportPurchaseMesComponent },
            
            { path: 'reporteprueba', component: AsasComponent },
            { path: 'account-settings', component: AccountSettingsComponent },
            { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );