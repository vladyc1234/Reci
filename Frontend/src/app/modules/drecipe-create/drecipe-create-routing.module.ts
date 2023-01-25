import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrecipeCreateComponent } from './drecipe-create/drecipe-create.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'drecipe-create',
  },
  {
    path : 'drecipe-create',
    component : DrecipeCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrecipeCreateRoutingModule { }
