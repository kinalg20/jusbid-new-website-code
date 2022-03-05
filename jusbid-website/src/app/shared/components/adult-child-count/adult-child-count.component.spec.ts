import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdultChildCountComponent } from './adult-child-count.component';

describe('AdultChildCountComponent', () => {
  let component: AdultChildCountComponent;
  let fixture: ComponentFixture<AdultChildCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdultChildCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdultChildCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
