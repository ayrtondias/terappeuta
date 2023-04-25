import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicacaoPage } from './publicacao.page';

describe('PublicacaoPage', () => {
  let component: PublicacaoPage;
  let fixture: ComponentFixture<PublicacaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PublicacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
