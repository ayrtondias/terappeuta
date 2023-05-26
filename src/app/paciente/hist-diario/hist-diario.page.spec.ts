import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistDiarioPage } from './hist-diario.page';

describe('HistDiarioPage', () => {
  let component: HistDiarioPage;
  let fixture: ComponentFixture<HistDiarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistDiarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
