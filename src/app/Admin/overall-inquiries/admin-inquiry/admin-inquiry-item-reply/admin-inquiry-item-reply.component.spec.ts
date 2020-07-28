import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInquiryItemReplyComponent } from './admin-inquiry-item-reply.component';

describe('AdminInquiryItemReplyComponent', () => {
  let component: AdminInquiryItemReplyComponent;
  let fixture: ComponentFixture<AdminInquiryItemReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInquiryItemReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInquiryItemReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
