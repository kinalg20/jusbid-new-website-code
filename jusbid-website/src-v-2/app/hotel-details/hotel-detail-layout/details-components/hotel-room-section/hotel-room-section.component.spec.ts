import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRoomSectionComponent } from './hotel-room-section.component';

describe('HotelRoomSectionComponent', () => {
  let component: HotelRoomSectionComponent;
  let fixture: ComponentFixture<HotelRoomSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelRoomSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelRoomSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
