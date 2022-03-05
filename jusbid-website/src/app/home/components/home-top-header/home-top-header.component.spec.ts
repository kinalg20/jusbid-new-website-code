import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopHeaderComponent } from './home-top-header.component';

describe('HomeTopHeaderComponent', () => {
  let component: HomeTopHeaderComponent;
  let fixture: ComponentFixture<HomeTopHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTopHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
