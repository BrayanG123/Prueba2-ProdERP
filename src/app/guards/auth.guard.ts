import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private _usuarioService: UsuarioService,
               private router: Router )
  {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

      console.log('paso por el guard');
      if ( !this._usuarioService.validarToken() ){
        console.log('No estas logueado (NO HAY TOKEN)');
        this.router.navigateByUrl('/login');
        return false;
      }
      
    return true;
  }
  
}
