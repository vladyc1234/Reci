import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCreate2Component } from './recipe-create2.component';

describe('RecipeCreate2Component', () => {
  let component: RecipeCreate2Component;
  let fixture: ComponentFixture<RecipeCreate2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCreate2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCreate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
