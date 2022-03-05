import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRealEstateComponent } from './home-real-estate.component';

describe('HomeRealEstateComponent', () => {
  let component: HomeRealEstateComponent;
  let fixture: ComponentFixture<HomeRealEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRealEstateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
