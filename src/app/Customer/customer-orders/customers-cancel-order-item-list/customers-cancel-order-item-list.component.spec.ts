import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersCancelOrderItemListComponent } from './customers-cancel-order-item-list.component';

describe('CustomersCancelOrderItemListComponent', () => {
  let component: CustomersCancelOrderItemListComponent;
  let fixture: ComponentFixture<CustomersCancelOrderItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersCancelOrderItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersCancelOrderItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
