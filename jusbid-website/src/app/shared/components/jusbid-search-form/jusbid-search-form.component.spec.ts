import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JusbidSearchFormComponent } from './jusbid-search-form.component';

describe('JusbidSearchFormComponent', () => {
  let component: JusbidSearchFormComponent;
  let fixture: ComponentFixture<JusbidSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JusbidSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JusbidSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
