import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersCompletedOrderItemListComponent } from './customers-completed-order-item-list.component';

describe('CustomersCompletedOrderItemListComponent', () => {
  let component: CustomersCompletedOrderItemListComponent;
  let fixture: ComponentFixture<CustomersCompletedOrderItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersCompletedOrderItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersCompletedOrderItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
