import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInquiryItemComponent } from './admin-inquiry-item.component';

describe('AdminInquiryItemComponent', () => {
  let component: AdminInquiryItemComponent;
  let fixture: ComponentFixture<AdminInquiryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInquiryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInquiryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
