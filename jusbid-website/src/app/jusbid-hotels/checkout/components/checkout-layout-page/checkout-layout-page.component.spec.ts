import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutLayoutPageComponent } from './checkout-layout-page.component';

describe('CheckoutLayoutPageComponent', () => {
  let component: CheckoutLayoutPageComponent;
  let fixture: ComponentFixture<CheckoutLayoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutLayoutPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutLayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
