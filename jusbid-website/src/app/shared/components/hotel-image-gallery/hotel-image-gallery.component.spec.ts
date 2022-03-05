import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelImageGalleryComponent } from './hotel-image-gallery.component';

describe('HotelImageGalleryComponent', () => {
  let component: HotelImageGalleryComponent;
  let fixture: ComponentFixture<HotelImageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelImageGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
