import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrdersListComponent } from './cart-orders-list.component';

describe('CartOrdersListComponent', () => {
  let component: CartOrdersListComponent;
  let fixture: ComponentFixture<CartOrdersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartOrdersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
