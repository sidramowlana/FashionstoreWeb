import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEmailResetComponent } from './send-email-reset.component';

describe('SendEmailResetComponent', () => {
  let component: SendEmailResetComponent;
  let fixture: ComponentFixture<SendEmailResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendEmailResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendEmailResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
