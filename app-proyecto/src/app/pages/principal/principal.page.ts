import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  usuario : string = 'User'; //Pendiente: hacer que el loggin entregue el usuario que ingresa para cambiar este texto.

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    
  }

  goToResetPass() {
    this.router.navigate(['reset-pass']);
  }
}
