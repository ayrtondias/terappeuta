import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadpacientesPage } from './cadpacientes.page';

describe('CadpacientesPage', () => {
  let component: CadpacientesPage;
  let fixture: ComponentFixture<CadpacientesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadpacientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
