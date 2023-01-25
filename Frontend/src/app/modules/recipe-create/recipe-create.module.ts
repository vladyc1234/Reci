import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeCreateRoutingModule } from './recipe-create-routing.module';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    RecipeCreateComponent,
  ],
  imports: [
    CommonModule,
    RecipeCreateRoutingModule,
    MaterialModule
  ]
})
export class RecipeCreateModule { }
