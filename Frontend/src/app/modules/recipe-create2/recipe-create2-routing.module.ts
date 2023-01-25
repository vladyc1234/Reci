import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeCreate2Component } from './recipe-create2/recipe-create2.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'recipe-create2',
  },
  {
    path : 'recipe-create2',
    component : RecipeCreate2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeCreate2RoutingModule { }
