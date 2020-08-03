import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersOrderItemComponent } from './customers-order-item.component';

describe('CustomersOrderItemComponent', () => {
  let component: CustomersOrderItemComponent;
  let fixture: ComponentFixture<CustomersOrderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersOrderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
