import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductInquiryComponent } from './add-product-inquiry.component';

describe('AddProductInquiryComponent', () => {
  let component: AddProductInquiryComponent;
  let fixture: ComponentFixture<AddProductInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
