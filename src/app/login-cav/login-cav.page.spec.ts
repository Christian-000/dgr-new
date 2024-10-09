import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginCavPage } from './login-cav.page';

describe('LoginCavPage', () => {
  let component: LoginCavPage;
  let fixture: ComponentFixture<LoginCavPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
