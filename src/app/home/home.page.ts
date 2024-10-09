import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { MiPortalPage } from '../mi-portal/mi-portal.page';
import { AyudaPage } from '../ayuda/ayuda.page';
import { NovedadesPage } from '../novedades/novedades.page';
import { PuestosDeAtencionPage } from '../puestos-de-atencion/puestos-de-atencion.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, NgIf, RouterLink, CommonModule]
})
export class HomePage implements OnInit {
  items: any;
  btnNotif: boolean;
  numNotif: number = 0;
  footer: boolean;
  estaadherido: any;
  noleidas: any;
  // private token: String;
  private cuit: any;
  constructor(private router: Router) {
    this.btnNotif = true;
    this.footer = false;

    this.loadItemsMenu();
  }

  loadItemsMenu() {
    console.log('loadItemsMenu');

    this.items = [
      { icon: "card_portal.svg", name: 'Mi Portal', path: '/mi-portal', },
      { icon: "card_ayuda.svg", name: 'Ayuda', path: '/ayuda', },
      { icon: "card_novedades.svg", name: 'Novedades', path: '/novedades', },
      { icon: "card_puestos.svg", name: 'Puestos', path: '/puestos-de-atencion', },
      // { icon: "card_fiscalizacion.svg", name: 'Mi Comprobante', page: LoginFiscalizarPage, },
    ];
  }

  ngOnInit() {
    console.log('HOLA')
  }

  getNotificaciones() {
    console.log('getNotificaciones');
  }

  itemSelected(item: any) {
    this.router.navigate([item.path]);
    console.log('itemSelected', item);
  }

}
