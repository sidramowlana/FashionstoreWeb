import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemViewComponent } from './product-item-view.component';

describe('ProductItemViewComponent', () => {
  let component: ProductItemViewComponent;
  let fixture: ComponentFixture<ProductItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
