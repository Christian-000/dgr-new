import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-puestos-de-atencion',
  templateUrl: './puestos-de-atencion.page.html',
  styleUrls: ['./puestos-de-atencion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PuestosDeAtencionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoHomePage() {
    this.router.navigate(['/home']);
  }

  verMapa(latOrEmail: string, lng?: string) {
    if (lng) {
      // Implementar la lógica para ver el mapa con las coordenadas proporcionadas
      console.log(`Ver mapa en latitud: ${latOrEmail}, longitud: ${lng}`);
    } else {
      // Implementar la lógica para manejar el correo electrónico
      console.log(`Abrir correo: ${latOrEmail}`);
    }
  }
}