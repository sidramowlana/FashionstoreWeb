import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditViewProductComponent } from './edit-view-product.component';

describe('EditViewProductComponent', () => {
  let component: EditViewProductComponent;
  let fixture: ComponentFixture<EditViewProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditViewProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditViewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
