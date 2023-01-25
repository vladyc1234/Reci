import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeCreate2RoutingModule } from './recipe-create2-routing.module';
import { RecipeCreate2Component } from './recipe-create2/recipe-create2.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    RecipeCreate2Component,
  ],
  imports: [
    CommonModule,
    RecipeCreate2RoutingModule,
    MaterialModule
  ]
})
export class RecipeCreate2Module { }
