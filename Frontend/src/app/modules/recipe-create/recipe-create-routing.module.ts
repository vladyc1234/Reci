import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
const routes: Routes = [
  {
    path : '',
    redirectTo: 'recipe-create',
  },
  {
    path : 'recipe-create',
    component : RecipeCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeCreateRoutingModule { }
