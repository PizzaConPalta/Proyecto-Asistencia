import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage implements OnInit {

  mdl_contrasena1: string = '';
  mdl_contrasena2: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //PENDIENTE: No logro que pase los datos a la pagina del loggin, solo encontre como hacerlo con el constructor pero no me sirve pq se comporta raro
  //iniciado  desde 0... :(

  restablecerContrasena() {

    if(this.mdl_contrasena1 == '' && this.mdl_contrasena2 == '') {
      console.log('DEBE INGRESAR CREDENCIALES');
    }
    else if(this.mdl_contrasena1 == this.mdl_contrasena2){
      let newPass: NavigationExtras = {
        state:{
          pass1: this.mdl_contrasena1
        }
      }
      console.log(this.mdl_contrasena1)
      this.router.navigate(['login'], newPass);
    }
    else{
      alert('LAS CREDENCIALES DEBEN COINCIDIR');
    }
  }

}
