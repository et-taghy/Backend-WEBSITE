import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitTelComponent } from './produit-tel.component';

describe('ProduitTelComponent', () => {
  let component: ProduitTelComponent;
  let fixture: ComponentFixture<ProduitTelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitTelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
