import { RouterModule, Routes } from '@angular/router'
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { CrearcontraComponent } from './crearcontrasena/crearcontra.component';
// import { RegisterComponent } from './login/register.component';


const appRoutes: Routes = [
    
    { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
    {
        path: '',
        component: PagesComponent,
        loadChildren: './pages/pages.module#PagesModule'
    },
    { path: 'nueva-contraseña/:token', component: CrearcontraComponent },
    { path: '**', component: NopagefoundComponent },
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );