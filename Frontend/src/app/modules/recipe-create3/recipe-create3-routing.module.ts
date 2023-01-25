import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeCreate3Component } from './recipe-create3/recipe-create3.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'recipe-create3',
  },
  {
    path : 'recipe-create3',
    component : RecipeCreate3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeCreate3RoutingModule { }
