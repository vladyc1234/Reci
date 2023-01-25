import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';


const routes: Routes = [
  {
    path : '',
    redirectTo: 'recipes-search',
  },
  {
    path : 'recipes-search',
    component : RecipeSearchComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesSearchRoutingModule { }
