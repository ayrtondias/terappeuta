import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePacientePage } from './home-paciente.page';

describe('HomePacientePage', () => {
  let component: HomePacientePage;
  let fixture: ComponentFixture<HomePacientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomePacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
