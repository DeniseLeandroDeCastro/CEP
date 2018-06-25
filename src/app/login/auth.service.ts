import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/login/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'usuario@email.com' &&
       usuario.senha === '123456') {
         this.router.navigate(['/']);
         this.usuarioAutenticado = true;
       } else {
         this.usuarioAutenticado = false;
       }

  }
}
