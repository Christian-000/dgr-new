import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonList, IonItem, IonLabel, IonInput, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login-cav',
  templateUrl: './login-cav.page.html',
  styleUrls: ['./login-cav.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonRow, IonList, IonItem, IonLabel, IonInput, IonButton, IonIcon]
})
export class LoginCavPage implements OnInit {
  formLogin: FormGroup = this.fb.group({
    username: [''],
    password: ['']
  });
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  codeInput(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
  }

  showHide() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }

  webTDR() {
    console.log('webTDR');
  }

  loginData() {
    console.log(this.formLogin.value);
  }
}