import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRatingReviewModelComponent } from './customer-rating-review-model.component';

describe('CustomerRatingReviewModelComponent', () => {
  let component: CustomerRatingReviewModelComponent;
  let fixture: ComponentFixture<CustomerRatingReviewModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRatingReviewModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRatingReviewModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
