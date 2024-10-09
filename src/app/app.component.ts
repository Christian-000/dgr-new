import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonButton, IonRouterLink, IonTitle, IonMenuButton, IonHeader, IonButtons, IonToolbar, IonFooter, MenuController } from '@ionic/angular/standalone';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { StatusBar } from '@capacitor/status-bar';
// import { SplashScreen } from '@capacitor/splash-screen';
// import { GoogleAnalytics } from '@awesome-cordova-plugins/google-analytics/ngx';

import { HomePage } from './home/home.page';
import { MiPortalPage } from './mi-portal/mi-portal.page';
import { NovedadesPage } from './novedades/novedades.page';
import { PuestosDeAtencionPage } from './puestos-de-atencion/puestos-de-atencion.page';
import { AyudaPage } from './ayuda/ayuda.page';
// import { NotificacionesPage } from '../pages/notificaciones/notificaciones.component';
// import { LoginCavPage } from '../pages/login-cav/login-cav.component';
// import { NovedadesPage } from '../pages/novedades/novedades.component';
// import { PuestosAtencionPage } from '../pages/puestos-atencion/puestos-atencion.component';
// import { MiPortalPage } from '../pages/mi-portal/mi-portal.component';
// import { PagosPage } from '../pages/pagos/pagos.component';
// import { AyudaPage } from '../pages/ayuda/ayuda.component';
// import { VencimientosPage } from '../pages/vencimientos/vencimientos.component';
// import { EstadoCuentaPagosPage } from '../pages/estado-cuenta-pagos/estado-cuenta-pagos.component';
// import { ServiciosPage } from '../pages/servicios/servicios.component';

// import { LoginCavService } from '../services/login-cav.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    // IonicModule,
    HomePage,
    // NotificacionesPage,
    // LoginCavPage,
    // NovedadesPage,
    // PuestosAtencionPage,
    // MiPortalPage,
    // PagosPage,
    // AyudaPage,
    // VencimientosPage,
    // EstadoCuentaPagosPage,
    // ServiciosPage,
    IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet, IonTitle, IonButton, IonMenuButton, IonFooter, IonHeader, IonButtons, IonToolbar
  ],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  // private loginService = inject(LoginCavService);
  private menuCtrl = inject(MenuController);
  // private ga = inject(GoogleAnalytics);

  // rootPage = HomePage;

  pages: Array<{ icon: string, title: string, status: string, route: string }> = [
    { icon: "menu-icon-home", title: 'Inicio', status: 'true', route: '' },
    { icon: "menu-icon-home", title: 'Mi Portal', status: 'true', route: 'mi-portal' },
    { icon: "menu-icon-home", title: 'Novedades', status: 'true', route: 'novedades' },
    { icon: "menu-icon-home", title: 'Puestos de Atención', status: 'true', route: 'puestos-de-atencion' },
    { icon: "menu-icon-home", title: 'Ayuda', status: 'true', route: 'ayuda' },
  ];

  userLoggedIn = false;
  usuarioMenu = '';
  cuitMenu = '';

  constructor(private router: Router, private menu: MenuController) {
    // this.initializeApp();
  }


  async openPage(page: { title: string, route: string }) {
    console.log('openPage', page);
    await this.router.navigate([page.route]);
  }

  closeMenu() {
    alert('closeMenu');
    this.menuCtrl.close('m1');
  }
}