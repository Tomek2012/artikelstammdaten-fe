import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelstammUebersichtComponent } from './artikelstamm-uebersicht.component';

describe('ArtikelstammUebersichtComponent', () => {
  let component: ArtikelstammUebersichtComponent;
  let fixture: ComponentFixture<ArtikelstammUebersichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtikelstammUebersichtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtikelstammUebersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
