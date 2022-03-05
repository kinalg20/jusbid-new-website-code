import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JusbidModelComponent } from './jusbid-model.component';

describe('JusbidModelComponent', () => {
  let component: JusbidModelComponent;
  let fixture: ComponentFixture<JusbidModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JusbidModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JusbidModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
