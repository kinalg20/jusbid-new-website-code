import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAminityComponent } from './hotel-aminity.component';

describe('HotelAminityComponent', () => {
  let component: HotelAminityComponent;
  let fixture: ComponentFixture<HotelAminityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelAminityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelAminityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
