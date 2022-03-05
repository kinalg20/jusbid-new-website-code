import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationHotelsComponent } from './recommendation-hotels.component';

describe('RecommendationHotelsComponent', () => {
  let component: RecommendationHotelsComponent;
  let fixture: ComponentFixture<RecommendationHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationHotelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
