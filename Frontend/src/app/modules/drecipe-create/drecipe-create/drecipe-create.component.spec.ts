import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrecipeCreateComponent } from './drecipe-create.component';

describe('DrecipeCreateComponent', () => {
  let component: DrecipeCreateComponent;
  let fixture: ComponentFixture<DrecipeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrecipeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrecipeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
