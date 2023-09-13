import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {

  usuario: string = '';
  contrasena_nueva: string = '';
  usuario_creado: string = '';
  nombre_creado: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation();

    if(extras?.extras.state) {
      this.usuario_creado = extras?.extras.state["user"];
      this.nombre_creado = extras?.extras.state["name"];
    }
    console.log(this.usuario_creado)
  }

  restablecerContrasena() {

    if(this.usuario == '' && this.contrasena_nueva == '') {
      console.log('DEBE INGRESAR CREDENCIALES');
    }
    else if(this.usuario == this.usuario_creado){
      let extra: NavigationExtras = {
        replaceUrl: true,
        state:{
          user: this.usuario_creado,
          name: this.nombre_creado,
          pass1: this.contrasena_nueva
        }
      }
      console.log(this.contrasena_nueva)
      this.router.navigate(['login'], extra);
    }
    else{
      alert('LAS CREDENCIALES DEBEN COINCIDIR');
    }
  }

}
