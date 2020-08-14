import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateReviewFormComponent } from './rate-review-form.component';

describe('RateReviewFormComponent', () => {
  let component: RateReviewFormComponent;
  let fixture: ComponentFixture<RateReviewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateReviewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
