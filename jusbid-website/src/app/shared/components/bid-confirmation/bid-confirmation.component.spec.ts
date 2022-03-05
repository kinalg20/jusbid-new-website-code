import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidConfirmationComponent } from './bid-confirmation.component';

describe('BidConfirmationComponent', () => {
  let component: BidConfirmationComponent;
  let fixture: ComponentFixture<BidConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
