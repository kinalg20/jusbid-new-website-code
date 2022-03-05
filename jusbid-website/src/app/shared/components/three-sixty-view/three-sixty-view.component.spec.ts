import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeSixtyViewComponent } from './three-sixty-view.component';

describe('ThreeSixtyViewComponent', () => {
  let component: ThreeSixtyViewComponent;
  let fixture: ComponentFixture<ThreeSixtyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeSixtyViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeSixtyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
