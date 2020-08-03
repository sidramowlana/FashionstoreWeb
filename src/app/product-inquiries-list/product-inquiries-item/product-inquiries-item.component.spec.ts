import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInquiriesItemComponent } from './product-inquiries-item.component';

describe('ProductInquiriesItemComponent', () => {
  let component: ProductInquiriesItemComponent;
  let fixture: ComponentFixture<ProductInquiriesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInquiriesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInquiriesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
