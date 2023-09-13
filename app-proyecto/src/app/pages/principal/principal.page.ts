import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  nombre : string = '';
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    let usuario = this.router.getCurrentNavigation();

    if(usuario?.extras.state) {
      this.nombre = usuario?.extras.state["name"];
      this.usuario = usuario?.extras.state["user"];
      this.contrasena = usuario?.extras.state["pass"];
    }
  }

  cierreSesion(){
    let extra: NavigationExtras = {
      replaceUrl: true,
      state:{
        user: this.usuario,
        name: this.nombre,
        pass: this.contrasena
      }
    }
    this.router.navigate(['login'], extra);
    }
  }

