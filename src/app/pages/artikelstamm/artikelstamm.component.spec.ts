import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelstammComponent } from './artikelstamm.component';

describe('ArtikelstammComponent', () => {
  let component: ArtikelstammComponent;
  let fixture: ComponentFixture<ArtikelstammComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtikelstammComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtikelstammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
