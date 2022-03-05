import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutBillingInfoComponent } from './checkout-billing-info.component';

describe('CheckoutBillingInfoComponent', () => {
  let component: CheckoutBillingInfoComponent;
  let fixture: ComponentFixture<CheckoutBillingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutBillingInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutBillingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
