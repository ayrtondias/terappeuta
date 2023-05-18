import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoricConsultPage } from './historic-consult.page';

describe('HistoricConsultPage', () => {
  let component: HistoricConsultPage;
  let fixture: ComponentFixture<HistoricConsultPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistoricConsultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
