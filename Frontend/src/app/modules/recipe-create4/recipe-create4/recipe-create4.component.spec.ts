import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCreate4Component } from './recipe-create4.component';

describe('RecipeCreate4Component', () => {
  let component: RecipeCreate4Component;
  let fixture: ComponentFixture<RecipeCreate4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCreate4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCreate4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
