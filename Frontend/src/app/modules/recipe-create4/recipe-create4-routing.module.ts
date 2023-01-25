import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeCreate4Component } from './recipe-create4/recipe-create4.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'recipe-create4',
  },
  {
    path : 'recipe-create4',
    component : RecipeCreate4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeCreate4RoutingModule { }
