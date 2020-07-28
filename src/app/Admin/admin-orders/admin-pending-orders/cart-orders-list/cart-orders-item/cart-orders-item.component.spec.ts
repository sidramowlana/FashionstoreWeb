import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrdersItemComponent } from './cart-orders-item.component';

describe('CartOrdersItemComponent', () => {
  let component: CartOrdersItemComponent;
  let fixture: ComponentFixture<CartOrdersItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartOrdersItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrdersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
