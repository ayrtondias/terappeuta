import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiarioPacientePage } from './diario-paciente.page';

describe('DiarioPacientePage', () => {
  let component: DiarioPacientePage;
  let fixture: ComponentFixture<DiarioPacientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiarioPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
