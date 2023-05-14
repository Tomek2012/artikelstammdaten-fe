import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelstammAnlegenComponent } from './artikelstamm-anlegen.component';

describe('ArtikelstammAnlegenComponent', () => {
  let component: ArtikelstammAnlegenComponent;
  let fixture: ComponentFixture<ArtikelstammAnlegenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtikelstammAnlegenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtikelstammAnlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
