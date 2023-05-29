import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalheDiarioPacientePage } from './detalhe-diario-paciente.page';

describe('DetalheDiarioPacientePage', () => {
  let component: DetalheDiarioPacientePage;
  let fixture: ComponentFixture<DetalheDiarioPacientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalheDiarioPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
