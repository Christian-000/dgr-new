import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-mi-portal',
  templateUrl: './mi-portal.page.html',
  styleUrls: ['./mi-portal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MiPortalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
