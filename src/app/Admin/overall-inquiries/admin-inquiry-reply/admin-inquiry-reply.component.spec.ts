import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInquiryReplyComponent } from './admin-inquiry-reply.component';

describe('AdminInquiryReplyComponent', () => {
  let component: AdminInquiryReplyComponent;
  let fixture: ComponentFixture<AdminInquiryReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInquiryReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInquiryReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
