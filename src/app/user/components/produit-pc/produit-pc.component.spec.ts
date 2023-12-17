import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitPCComponent } from './produit-pc.component';

describe('ProduitPCComponent', () => {
  let component: ProduitPCComponent;
  let fixture: ComponentFixture<ProduitPCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitPCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
