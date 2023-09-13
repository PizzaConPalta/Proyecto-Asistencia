import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html', 
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario_creado: string = '';
  contrasena_creada: string = '';
  nombre_creado: string = '';
  contrasena_nueva: string = '';

  mdl_usuario: string = '';
  mdl_contrasena: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    // SE RECIBEN LOS PARÁMETROS ENVIADOS DE OTRAS PÁGINAS
    let extras = this.router.getCurrentNavigation();

    if(extras?.extras.state) {
      this.usuario_creado = extras?.extras.state["user"];
      this.nombre_creado = extras?.extras.state["name"];
      if(extras?.extras.state["pass1"] != undefined){
        this.contrasena_creada = extras?.extras.state["pass1"];
        console.log(extras?.extras.state["pass1"])
      }else{
        this.contrasena_creada = extras?.extras.state["pass"];
      }
    }
  }

  irCrearUsuario() {
    let extras: NavigationExtras = {
      replaceUrl: true
    }

    this.router.navigate(['crear-usuario'], extras);
  }

  goToResetPass() {
    let usuario: NavigationExtras = {
      replaceUrl: true,
      state: {
        user: this.usuario_creado,
        name: this.nombre_creado
      }
    }
    this.router.navigate(['reset-pass'], usuario);
  }

  login() {
    if(this.mdl_usuario == '' || this.mdl_contrasena == '') {
      alert('DEBE INGRESAR CREDENCIALES');
    }
    else if(this.mdl_usuario == this.usuario_creado && this.mdl_contrasena == this.contrasena_creada) {
      let usuario: NavigationExtras = {
        replaceUrl: true,
        state: {
          name: this.nombre_creado,
          user: this.usuario_creado,
          pass: this.contrasena_creada
        }
      }
      this.router.navigate(['principal'], usuario);
    }
    else {
      alert('CREDENCIALES INVÁLIDAS');
      console.log(this.usuario_creado)
      console.log(this.contrasena_creada)
    }
  }

}
