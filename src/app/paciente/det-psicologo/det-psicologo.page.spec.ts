import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetPsicologoPage } from './det-psicologo.page';

describe('DetPsicologoPage', () => {
  let component: DetPsicologoPage;
  let fixture: ComponentFixture<DetPsicologoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetPsicologoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
