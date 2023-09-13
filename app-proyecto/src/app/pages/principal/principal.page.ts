import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  usuario : string = ''; //Pendiente: hacer que el loggin entregue el usuario que ingresa para cambiar este texto.

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    let usuario = this.router.getCurrentNavigation();

    if(usuario?.extras.state) {
      this.usuario = usuario?.extras.state["user"];
    }
  }

  goToResetPass() {
    this.router.navigate(['reset-pass']);
  }
}
