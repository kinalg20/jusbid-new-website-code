import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDetailLayoutComponent } from './hotel-detail-layout.component';

describe('HotelDetailLayoutComponent', () => {
  let component: HotelDetailLayoutComponent;
  let fixture: ComponentFixture<HotelDetailLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelDetailLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDetailLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
