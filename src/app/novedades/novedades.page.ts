import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonGrid, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.page.html',
  styleUrls: ['./novedades.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonAvatar, IonGrid, IonRow]
})
export class NovedadesPage implements OnInit {
  items: any = [];
  categoria: any = 1;
  registros: any = 10;
  posicion: any = 0;

  constructor(
  ) {
    this.cargarNovedades();

  }

  cargarNovedades() {
    let data = [
      {
        id: 1,
        titulo: 'Título de la novedad 1',
        descripcion: 'Descripción de la novedad 1',
        imagen: 'https://via.placeholder.com/150',
        fecha: '2021-06-01',
        autor: 'Autor de la novedad 1'
      },
      {
        id: 2,
        titulo: 'Título de la novedad 2',
        descripcion: 'Descripción de la novedad 2',
        imagen: 'https://via.placeholder.com/150',
        fecha: '2021-06-02',
        autor: 'Autor de la novedad 2'
      },
      {
        id: 3,
        titulo: 'Título de la novedad 3',
        descripcion: 'Descripción de la novedad 3',
        imagen: 'https://via.placeholder.com/150',
        fecha: '2021-06-03',
        autor: 'Autor de la novedad 3'
      }
    ];
    this.items = data;
  }

  getInfoNovedad(item: any) {
    console.log(item);
  }

  ngOnInit() {
  }

}
