import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersPendingOrderItemListComponent } from './customers-pending-order-item-list.component';

describe('CustomersPendingOrderItemListComponent', () => {
  let component: CustomersPendingOrderItemListComponent;
  let fixture: ComponentFixture<CustomersPendingOrderItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersPendingOrderItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersPendingOrderItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
