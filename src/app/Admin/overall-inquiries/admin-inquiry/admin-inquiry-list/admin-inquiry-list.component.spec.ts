import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInquiryListComponent } from './admin-inquiry-list.component';

describe('AdminInquiryListComponent', () => {
  let component: AdminInquiryListComponent;
  let fixture: ComponentFixture<AdminInquiryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInquiryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInquiryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
