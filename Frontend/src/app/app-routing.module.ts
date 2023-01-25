import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Auth2Guard } from './auth2.guard';

const routes: Routes = [

  {
    path:'',
    loadChildren: () => import('src/app/modules/login/login.module').then(a => a.LoginModule),
  },
  {
    path:'',
    loadChildren: () => import('src/app/modules/register-user/register-user.module').then(a => a.RegisterUserModule),
  },


  {
    path:'',
    canActivate: [AuthGuard],
    children: [
      {
        path:'',
        loadChildren: () => import('src/app/modules/home/home.module').then(a => a.HomeModule),
      },
      {
        path:'',
        loadChildren: () => import('src/app/modules/profile/profile.module').then(a => a.ProfileModule),
      },
      {
        path:'',
        loadChildren: () => import('src/app/modules/recipes-search/recipes-search.module').then(a => a.RecipesSearchModule),
      },
      {
        path:'',
        loadChildren: () => import('src/app/modules/recipe-template/recipe-template.module').then(a => a.RecipeTemplateModule),
      },
      {
        path:'',
        loadChildren: () => import('src/app/modules/recipe-create/recipe-create.module').then(a => a.RecipeCreateModule),
      },
      {
        path:'',
        loadChildren: () => import('src/app/modules/recipe-create2/recipe-create2.module').then(a => a.RecipeCreate2Module),
      },
      {
        path:'',
        loadChildren: () => import('src/app/modules/recipe-create3/recipe-create3.module').then(a => a.RecipeCreate3Module),
      },
      {
        path:'',
        loadChildren: () => import('src/app/modules/recipe-create4/recipe-create4.module').then(a => a.RecipeCreate4Module),
      },
      {
        path:'',
        loadChildren: () => import('src/app/modules/drecipe-create/drecipe-create.module').then(a => a.DrecipeCreateModule),
      },
      
    ]
  },
  {
    path:'',
    canActivate: [Auth2Guard],
    children: [
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
