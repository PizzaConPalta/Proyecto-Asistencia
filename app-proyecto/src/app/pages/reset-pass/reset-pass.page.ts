import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {

  usuario: string = '';
  mdl_contrasenaNueva: string = '';
  usuario_creado: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation();

    if(extras?.extras.state) {
      this.usuario_creado = extras?.extras.state['user'];
    }
    console.log(this.usuario_creado)
  }

  //PENDIENTE: No logro que pase los datos a la pagina del loggin, solo encontre como hacerlo con el constructor pero no me sirve pq se comporta raro
  //iniciado  desde 0... :(

  restablecerContrasena() {

    if(this.usuario == '' && this.mdl_contrasenaNueva == '') {
      console.log('DEBE INGRESAR CREDENCIALES');
    }
    else if(this.usuario == this.usuario_creado){
      let newPass: NavigationExtras = {
        state:{
          newpass: this.mdl_contrasenaNueva
        }
      }
      console.log(this.mdl_contrasenaNueva)
      this.router.navigate(['login'], newPass);
    }
    else{
      alert('LAS CREDENCIALES DEBEN COINCIDIR');
    }
  }

}
