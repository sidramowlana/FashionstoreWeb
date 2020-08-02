import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWomenComponent } from './category-women.component';

describe('CategoryWomenComponent', () => {
  let component: CategoryWomenComponent;
  let fixture: ComponentFixture<CategoryWomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryWomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
