import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeTemplateRoutingModule } from './recipe-template-routing.module';
import { RecipeTemplateComponent } from './recipe-template/recipe-template.component';
import { MatTable } from '@angular/material/table';
import { MaterialModule } from '../material/material.module';
import { MatPaginator } from '@angular/material/paginator';

@NgModule({
  declarations: [
    RecipeTemplateComponent
  ],
  imports: [
    CommonModule,
    RecipeTemplateRoutingModule,
    MaterialModule
  ]
})
export class RecipeTemplateModule { }
