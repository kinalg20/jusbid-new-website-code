import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsReviewsComponent } from './hotels-reviews.component';

describe('HotelsReviewsComponent', () => {
  let component: HotelsReviewsComponent;
  let fixture: ComponentFixture<HotelsReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
