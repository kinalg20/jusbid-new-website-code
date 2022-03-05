import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsAndRoomsPickerComponent } from './guests-and-rooms-picker.component';

describe('GuestsAndRoomsPickerComponent', () => {
  let component: GuestsAndRoomsPickerComponent;
  let fixture: ComponentFixture<GuestsAndRoomsPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestsAndRoomsPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsAndRoomsPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
