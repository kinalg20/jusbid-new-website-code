import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAmenityModelComponent } from './room-amenity-model.component';

describe('RoomAmenityModelComponent', () => {
  let component: RoomAmenityModelComponent;
  let fixture: ComponentFixture<RoomAmenityModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomAmenityModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomAmenityModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
