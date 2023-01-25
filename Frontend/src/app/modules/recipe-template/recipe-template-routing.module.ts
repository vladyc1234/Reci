import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeTemplateComponent } from './recipe-template/recipe-template.component';


const routes: Routes = [
  {
    path : '',
    redirectTo: 'recipe-template',
  },
  {
    path : 'recipe-template',
    component : RecipeTemplateComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeTemplateRoutingModule { }
