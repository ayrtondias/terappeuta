import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessoesPage } from './sessoes.page';

describe('SessoesPage', () => {
  let component: SessoesPage;
  let fixture: ComponentFixture<SessoesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SessoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
