import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalheDiarioPage } from './detalhe-diario.page';

describe('DetalheDiarioPage', () => {
  let component: DetalheDiarioPage;
  let fixture: ComponentFixture<DetalheDiarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalheDiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
