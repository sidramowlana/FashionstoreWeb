import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInquiriesListComponent } from './product-inquiries-list.component';

describe('ProductInquiriesListComponent', () => {
  let component: ProductInquiriesListComponent;
  let fixture: ComponentFixture<ProductInquiriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInquiriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInquiriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
