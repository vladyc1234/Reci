import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeCreate4RoutingModule } from './recipe-create4-routing.module';
import { RecipeCreate4Component } from './recipe-create4/recipe-create4.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    RecipeCreate4Component
  ],
  imports: [
    CommonModule,
    RecipeCreate4RoutingModule,
    MaterialModule
  ]
})
export class RecipeCreate4Module { }
