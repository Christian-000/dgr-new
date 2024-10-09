import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PuestosDeAtencionPage } from './puestos-de-atencion.page';

describe('PuestosDeAtencionPage', () => {
  let component: PuestosDeAtencionPage;
  let fixture: ComponentFixture<PuestosDeAtencionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PuestosDeAtencionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
