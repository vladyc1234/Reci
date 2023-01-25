import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCreate3Component } from './recipe-create3.component';

describe('RecipeCreate3Component', () => {
  let component: RecipeCreate3Component;
  let fixture: ComponentFixture<RecipeCreate3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCreate3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCreate3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
