import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitAccesoireComponent } from './produit-accesoire.component';

describe('ProduitAccesoireComponent', () => {
  let component: ProduitAccesoireComponent;
  let fixture: ComponentFixture<ProduitAccesoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitAccesoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitAccesoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
