import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeCreate3RoutingModule } from './recipe-create3-routing.module';
import { RecipeCreate3Component } from './recipe-create3/recipe-create3.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    RecipeCreate3Component,
  ],
  imports: [
    CommonModule,
    RecipeCreate3RoutingModule,
    MaterialModule
  ]
})
export class RecipeCreate3Module { }
