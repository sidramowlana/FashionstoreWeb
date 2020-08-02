import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMenComponent } from './category-men.component';

describe('CategoryMenComponent', () => {
  let component: CategoryMenComponent;
  let fixture: ComponentFixture<CategoryMenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryMenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
