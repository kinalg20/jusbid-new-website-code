import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedHotelCardComponent } from './recommended-hotel-card.component';

describe('RecommendedHotelCardComponent', () => {
  let component: RecommendedHotelCardComponent;
  let fixture: ComponentFixture<RecommendedHotelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendedHotelCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedHotelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
