import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallInquiriesComponent } from './overall-inquiries.component';

describe('OverallInquiriesComponent', () => {
  let component: OverallInquiriesComponent;
  let fixture: ComponentFixture<OverallInquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallInquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallInquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
