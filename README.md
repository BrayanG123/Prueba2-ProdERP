# Adminpro

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## =====================================================================================
## Link del repositorio AdminLTE (donde saque la base para el frontend):
https://github.com/ColorlibHQ/AdminLTE/releases/tag/v3.0.2
## =====================================================================================

* CommonModule es para el ngFor, ngIf, etc

## ===================== PAGES.HTML NO RECONOCE NAVBAR NI SIDEBAR ======================
# Problemas al inicio de implementar las rutas (por mi cuenta):
use sin querer lazyload, copiando de un proyecto ya avanzado q lo usaba. Despues de buscar en mis cursos, vi la forma inicial en q se lo implemento. Mostrare el error q tuve (con lazyLoad) en app.routes.ts

const appRoutes: Routes = [
    // { path: 'home', component: DashboardComponent },
    {
        path: '',
        component: PagesComponent,
        loadChildren: './pages/pages.module#PagesModule'
    },
    // { path: 'home', component: DashboardComponent },
    // { path: 'home', component: DashboardComponent },
    // { path: 'usuarios', component: UsuariosComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' },
];

# aqui con la forma adecuada (pero de nivel basico)

    { path: '**', component: NopagefoundComponent },
 
 * Esto no solucionaba el problema. Solamente estaba en app.module.ts Tenia que borrar PagesComponent de las declaraciones. (El pages.html estaba bien, las rutas todo)    
## =====================================================================================

## ======================= LAS PAGINAS NO RESPETABAN EL SIDEBAR ==========================
 Esto era por que no estaban dentro de un wraper, tuve que poner dentro de un content-wraper el 
 router-outlet en pages.html para que todo lo q vaya en el dashboard pueda respetar