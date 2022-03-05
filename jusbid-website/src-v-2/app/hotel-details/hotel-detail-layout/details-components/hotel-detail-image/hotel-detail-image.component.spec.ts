import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDetailImageComponent } from './hotel-detail-image.component';

describe('HotelDetailImageComponent', () => {
  let component: HotelDetailImageComponent;
  let fixture: ComponentFixture<HotelDetailImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelDetailImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDetailImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
