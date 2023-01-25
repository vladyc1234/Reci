import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router }from '@angular/router';
import { Recipe, RecipesSearchService } from 'src/app/services/recipes-search.service';
@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['scss/animate.scss', 'scss/main.scss', 'scss/bootstrap.scss']
})
export class RecipeCreateComponent implements OnInit {

  constructor(
    private router: Router,
    private recipeService: RecipesSearchService,
  ) { }

  ngOnInit(): void {
  }

  public createForm: FormGroup = new FormGroup({
    recipe_name: new FormControl(''),
    recipe_description: new FormControl('')
  });

  public addRecipe(): void{
    let idUser = localStorage.getItem('idUser') || '0';
    let recipe = new Recipe(this.createForm.value.recipe_name, this.createForm.value.recipe_description, parseInt(idUser));
    
    this.recipeService.CreateRecipe(recipe).subscribe(
      data => {
        console.log(data)
        localStorage.setItem('idRecipe',data.id);
      }
    )
  }

  public nav(): void {
    if(localStorage.getItem("idRecipe")!=null)
      this.router.navigate(['/recipe-create2']);
  }

  public logout(): void{
    localStorage.setItem('Role', 'Anonim');
    this.router.navigate(['/login']);
  }

}
