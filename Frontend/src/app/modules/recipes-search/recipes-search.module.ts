import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RecipesSearchRoutingModule } from './recipes-search-routing.module';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { MatTable } from '@angular/material/table';
import { MaterialModule } from '../material/material.module';
import { MatPaginator } from '@angular/material/paginator';

@NgModule({
  declarations: [
    RecipeSearchComponent
  ],
  imports: [
    CommonModule,
    RecipesSearchRoutingModule,
    MaterialModule,
    MatCheckboxModule
  ]
})
export class RecipesSearchModule { }
