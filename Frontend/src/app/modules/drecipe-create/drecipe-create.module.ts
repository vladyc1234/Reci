import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrecipeCreateRoutingModule } from './drecipe-create-routing.module';
import { DrecipeCreateComponent } from './drecipe-create/drecipe-create.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    DrecipeCreateComponent
  ],
  imports: [
    CommonModule,
    DrecipeCreateRoutingModule,
    MaterialModule
  ]
})
export class DrecipeCreateModule { }
