import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionOrderComponent } from './gestion-order.component';

describe('GestionOrderComponent', () => {
  let component: GestionOrderComponent;
  let fixture: ComponentFixture<GestionOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
