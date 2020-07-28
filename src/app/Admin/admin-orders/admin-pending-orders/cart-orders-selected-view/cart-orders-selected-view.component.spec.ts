import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrdersSelectedViewComponent } from './cart-orders-selected-view.component';

describe('CartOrdersSelectedViewComponent', () => {
  let component: CartOrdersSelectedViewComponent;
  let fixture: ComponentFixture<CartOrdersSelectedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartOrdersSelectedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrdersSelectedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
