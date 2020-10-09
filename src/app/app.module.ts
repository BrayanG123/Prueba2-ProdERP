import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';

import { FooterComponent } from './shared/footer/footer.component';
// import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptors/interceptor.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CrearcontraComponent } from './crearcontrasena/crearcontra.component';


@NgModule({
  declarations: [
    AppComponent,
    // PagesComponent,
    FooterComponent,
    LoginComponent,
    CrearcontraComponent,
  ],
  imports: [
    APP_ROUTES,
    
    BrowserModule,
    FormsModule,    //lo necesitaba para el login
    PagesModule,
    HttpClientModule,
    CommonModule,     //Para los ngFor, ngIF, etc
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
