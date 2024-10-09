import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: "mi-portal",
    loadComponent: () =>
      import('./mi-portal/mi-portal.page').then((m) => m.MiPortalPage),
  },
  {
    path: 'mi-portal',
    loadComponent: () => import('./mi-portal/mi-portal.page').then(m => m.MiPortalPage)
  },
  {
    path: 'novedades',
    loadComponent: () => import('./novedades/novedades.page').then(m => m.NovedadesPage)
  },
  {
    path: 'puestos-de-atencion',
    loadComponent: () => import('./puestos-de-atencion/puestos-de-atencion.page').then(m => m.PuestosDeAtencionPage)
  },
  {
    path: 'ayuda',
    loadComponent: () => import('./ayuda/ayuda.page').then(m => m.AyudaPage)
  },
  {
    path: 'login-cav',
    loadComponent: () => import('./login-cav/login-cav.page').then( m => m.LoginCavPage)
  },
];
