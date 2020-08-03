import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrdersDetailItemComponent } from './customer-orders-detail-item.component';

describe('CustomerOrdersDetailItemComponent', () => {
  let component: CustomerOrdersDetailItemComponent;
  let fixture: ComponentFixture<CustomerOrdersDetailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerOrdersDetailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrdersDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
