import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiarioEmocionalPage } from './diario-emocional.page';

describe('DiarioEmocionalPage', () => {
  let component: DiarioEmocionalPage;
  let fixture: ComponentFixture<DiarioEmocionalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiarioEmocionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
