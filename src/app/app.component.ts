import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink, IonTitle, IonMenuButton, IonHeader, IonButtons, IonToolbar, IonFooter } from '@ionic/angular/standalone';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatusBar } from '@capacitor/status-bar';
// import { SplashScreen } from '@capacitor/splash-screen';
// import { GoogleAnalytics } from '@awesome-cordova-plugins/google-analytics/ngx';

import { HomePage } from './home/home.page';
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
    IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet, IonTitle, IonMenuButton, IonFooter, IonHeader, IonButtons, IonToolbar
  ],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  // private loginService = inject(LoginCavService);
  // private menuCtrl = inject(MenuController);
  // private ga = inject(GoogleAnalytics);

  // rootPage = HomePage;

  pages: Array<{ icon: string, title: string, status: string, component: any }> = [
    { icon: "menu-icon-home", title: 'Inicio', status: 'true', component: HomePage },
    // { icon: "menu-icon-portal", title: 'Mi Portal', status: 'true', component: LoginCavPage },
    // { icon: "menu-icon-ec", title: 'Estado de Cuenta', status: 'false', component: EstadoCuentaPagosPage },
    // { icon: "menu-icon-vencimientos", title: 'Vencimientos', status: 'false', component: VencimientosPage },
    // { icon: "menu-icon-pagos", title: 'Pagos', status: 'false', component: PagosPage },
    // { icon: "menu-icon-servicios", title: 'Servicios', status: 'false', component: ServiciosPage },
    // { icon: "menu-icon-novedades", title: 'Novedades', status: 'true', component: NovedadesPage },
    // { icon: "menu-icon-puestos", title: 'Puestos de Atención', status: 'true', component: PuestosAtencionPage },
    // { icon: "menu-icon-ayuda", title: 'Ayuda', status: 'true', component: AyudaPage },
    // { icon: "menu-icon-cerrar", title: 'Cerrar Sesión', status: 'false', component: HomePage }
  ];

  userLoggedIn = false;
  usuarioMenu = '';
  cuitMenu = '';

  constructor() {
    // this.initializeApp();
  }

  // async initializeApp() {
  //   await StatusBar.setBackgroundColor({ color: '#0574B9' });
  //   await SplashScreen.hide();

  //   try {
  //     await this.ga.startTrackerWithId('UA-22534903-4');
  //     this.ga.trackEvent('Home', 'Inicio la aplicación', 'app', 0);
  //   } catch (e) {
  //     console.error('Error starting GoogleAnalytics', e);
  //   }

  //   this.checkLoginStatus();
  // }

  checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('login') === 'true';
    if (isLoggedIn) {
      this.userLoggedIn = true;
      this.usuarioMenu = localStorage.getItem('nombreUsuario') || '';
      this.cuitMenu = localStorage.getItem('cuit') || '';
      this.updateMenuForLoggedInUser();
    } else {
      this.userLoggedIn = false;
      this.usuarioMenu = '';
      this.cuitMenu = '';
      this.updateMenuForLoggedOutUser();
    }
  }

  updateMenuForLoggedInUser() {
    this.pages.forEach(page => {
      if (['Estado de Cuenta', 'Vencimientos', 'Pagos', 'Servicios', 'Cerrar Sesión'].includes(page.title)) {
        page.status = 'true';
      }
    });
    this.pages.find(page => page.title === 'Mi Portal')!.status = 'false';
  }

  updateMenuForLoggedOutUser() {
    this.pages.forEach(page => {
      if (['Estado de Cuenta', 'Vencimientos', 'Pagos', 'Servicios', 'Cerrar Sesión'].includes(page.title)) {
        page.status = 'false';
      }
    });
    this.pages.find(page => page.title === 'Mi Portal')!.status = 'true';
  }

  async openPage(page: { title: string, component: any }) {
    // if (page.title === 'Cerrar Sesión') {
    //   await this.ga.trackEvent('Home', 'Cerro sesion', 'app', 0);
    //   localStorage.setItem('login', 'false');
    //   this.loginService.logout();
    //   this.checkLoginStatus();
    // } else {
    //   await this.ga.trackEvent('Home', page.title, 'app', 0);
    // }

    // await this.menuCtrl.close();
    // if (page.title === 'Inicio' || page.title === 'Cerrar Sesión') {
    //   await this.menuCtrl.enable(false);
    // }
  }
}