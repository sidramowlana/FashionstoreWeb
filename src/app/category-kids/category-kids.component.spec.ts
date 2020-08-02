import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryKidsComponent } from './category-kids.component';

describe('CategoryKidsComponent', () => {
  let component: CategoryKidsComponent;
  let fixture: ComponentFixture<CategoryKidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryKidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
