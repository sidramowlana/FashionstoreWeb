import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPendingOrdersComponent } from './admin-pending-orders.component';

describe('AdminPendingOrdersComponent', () => {
  let component: AdminPendingOrdersComponent;
  let fixture: ComponentFixture<AdminPendingOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPendingOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPendingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
