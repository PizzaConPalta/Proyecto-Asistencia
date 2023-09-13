import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  usuario : string = ''; 

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    let usuario = this.router.getCurrentNavigation();

    if(usuario?.extras.state) {
      this.usuario = usuario?.extras.state["name"];
    }
  }

}
