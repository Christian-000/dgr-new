import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, NgIf, RouterLink]
})
export class HomePage implements OnInit {
  items: any;
  btnNotif: boolean;
  numNotif: number = 0;
  footer:boolean;
  estaadherido: any;
  noleidas: any;
  // private token: String;
  private cuit: any;
  constructor() {
    this.btnNotif = true;
    this.footer = false;
   }

  ngOnInit() {
    console.log('HOLA')
  }

  getNotificaciones() {
    console.log('getNotificaciones');
  }

}
