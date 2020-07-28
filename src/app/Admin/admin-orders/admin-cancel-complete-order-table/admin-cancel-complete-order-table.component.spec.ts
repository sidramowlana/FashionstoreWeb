import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCancelCompleteOrderTableComponent } from './admin-cancel-complete-order-table.component';

describe('AdminCancelCompleteOrderTableComponent', () => {
  let component: AdminCancelCompleteOrderTableComponent;
  let fixture: ComponentFixture<AdminCancelCompleteOrderTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCancelCompleteOrderTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCancelCompleteOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
