import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiPortalPage } from './mi-portal.page';

describe('MiPortalPage', () => {
  let component: MiPortalPage;
  let fixture: ComponentFixture<MiPortalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPortalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
