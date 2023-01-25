import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CookedWith, MadeWith, Recipe, RecipesSearchService, RecipeTag } from 'src/app/services/recipes-search.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl, FormGroup } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-recipe-template',
  templateUrl: './profile.component.html',
  styleUrls: ['scss/animate.scss', 'scss/main.scss']
})

export class ProfileComponent implements OnInit {

  public displayedColumns_recipe = ['name'];
  public displayedColumns_recipe_derived = ['name', 'actions'];
  public displayedColumns_recipe_favorite = ['name', 'username'];
  public idUser = localStorage.getItem('idUser') || '1'
  public recipeToCreate: any;

  constructor(
    private router: Router,
    private recipeService: RecipesSearchService,
  ) { }

  dataSource = new MatTableDataSource<ElementR>(ELEMENT_DATA_R);
  dataSourceD = new MatTableDataSource<ElementRD>(ELEMENT_DATAR_RD);
  dataSourceF = new MatTableDataSource<ElementF>(ELEMENT_DATA_F);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceD.paginator = this.paginator;
    this.dataSourceF.paginator = this.paginator;
  }

  ngOnInit() {
    this.recipeService.GetAllRecipes().subscribe(
      (result) => {
        let i = 0;

        for (let j = 0; j < result.length; j++) {
          if (result[j].idUser == this.idUser) {
            this.dataSource.data[i] = { name: "", id: 0 };
            this.dataSource.data[i].id = result[j].id;
            this.dataSource.data[i].name = result[j].name;
            i++;
          }
        }
        this.dataSource.data = this.dataSource.data;
      },
      (error) => {
        console.error(error);
      }
    );
    this.recipeService.GetAllDerivedRecipe().subscribe(
      (result2) => {
        let i = 0;
        for (let j = 0; j < result2.length; j++)
          this.recipeService.GetRecipeById(result2[j].idRecipe).subscribe(
            (check) => {
              if (check.idUser == this.idUser) {
                this.dataSourceD.data[i] = { name: "", actions: ["push"], id: 0 };
                this.dataSourceD.data[i].id = result2[j].id;
                this.dataSourceD.data[i].name = result2[j].name;
                i++;
              }

              this.dataSourceD.data = this.dataSourceD.data;
            },
            (error) => {
              console.error(error);
            }
          )

        this.dataSourceD.data = this.dataSourceD.data;

        console.log
      },
      (error) => {
        console.error(error);
      }
    );

    this.recipeService.GetAllLibrariesById(this.idUser).subscribe(
      (result3) => {
        let i = 0;

        for (let j = 0; j < result3.length; j++) {
          this.recipeService.GetRecipeById(result3[j].idRecipe).subscribe(
            (check) => {
              this.dataSourceF.data[i] = { name: "", id: 0, username: "" };
              this.dataSourceF.data[i].id = check.id;
              this.dataSourceF.data[i].name = check.name;

              this.recipeService.GetUserById(result3[j].idUser).subscribe(
                (User) => {
                  this.dataSourceF.data[j].username = User.user.userName;
                }
              )

              i++;
              this.dataSourceF.data = this.dataSourceF.data;
            }
          )
        }
        this.dataSourceF.data = this.dataSourceF.data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public logout(): void {
    localStorage.setItem('Role', 'Anonim');
    this.router.navigate(['/login']);
  }

  public save(id: string): void {
    localStorage.setItem('link_id', id);
  }

  public del(): void {
    localStorage.removeItem('idRecipe');
  }

  public push(id: string): void {

    

    this.recipeService.GetDerivedRecipeById(id).subscribe(
      (result) => {
        let recipeName = result.name.split("-derived");

        this.recipeToCreate = new Recipe(recipeName[0], result.derivedRecipeFile, parseInt(this.idUser));

        this.recipeService.CreateRecipe(this.recipeToCreate).subscribe(
          data => {
            localStorage.setItem('idRecipeToCreate', data.id);
          }
        )
        
        localStorage.setItem('idOriginalRecipe', result.idRecipe);

      },
      (error) => {
        console.log(error);
      }
    )

    let idOriginalRecipe = localStorage.getItem("idOriginalRecipe") || '1';
    let idRecipeToCreate = localStorage.getItem("idRecipeToCreate") || '1';

    this.recipeService.GetAllDerivedTagsById(idOriginalRecipe).subscribe(
      (resultDerivedTags) => {
        for (let i = 0; i < resultDerivedTags.length; i++) {
          let tag = new RecipeTag(resultDerivedTags[i].nameTag, parseInt(idRecipeToCreate) + 1);
          this.recipeService.CreateRecipeTag(tag).subscribe(
            (error) => {
              console.log(error);
            }
          )
        }
      },
      (error) => {
        console.log(error);
      }
    )

    this.recipeService.GetAllRecipeTagsById(idOriginalRecipe).subscribe(
      (resultRecipeTags) => {
        for (let i = 0; i < resultRecipeTags.length; i++) {
          let tag = new RecipeTag(resultRecipeTags[i].nameTag, parseInt(idRecipeToCreate) + 1);
          this.recipeService.CreateRecipeTag(tag).subscribe(
            (data) => {
            },
            (error) => {
              console.log(error);
            }
          )
        }
      },
      (error) => {
        console.log(error);
      }
    )
    this.recipeService.GetAllCookedWithsById(idOriginalRecipe).subscribe(
      (resultUtensils) => {
        for (let i = 0; i < resultUtensils.length; i++) {
          let utensil = new CookedWith(resultUtensils[i].name, parseInt(idRecipeToCreate) + 1);
          this.recipeService.CreateCookedWith(utensil).subscribe(
            (data) => {
            },
            (error) => {
              console.log(error);
            }
          )
        }
      },
      (error) => {
        console.log(error);
      }
    )
    this.recipeService.GetAllMadeWithsById(idOriginalRecipe).subscribe(
      (resultIngredients) => {
        for (let i = 0; i < resultIngredients.length; i++) {
          let ingredient = new MadeWith(resultIngredients[i].name, parseInt(idRecipeToCreate) + 1);
          this.recipeService.CreateMadeWith(ingredient).subscribe(
            (data) => {
            },
            (error) => {
              console.log(error);
            }
          )
        }
      },
      (error) => {
        console.log(error);
      }
    )

    // this.recipeService.DeleteDerivedRecipeById(id).subscribe(
    //   (error) => {
    //     console.log(error);
    //   }
    // )

    // window.location.reload();
  }
}



export interface ElementR {
  name: string;
  id: number;
}

export interface ElementF {
  name: string;
  id: number;
  username: string;
}

export interface ElementRD {
  name: string;
  actions: string[];
  id: number;
}

const ELEMENT_DATA_R: ElementR[] = [];
const ELEMENT_DATAR_RD: ElementRD[] = [];
const ELEMENT_DATA_F: ElementF[] = [];



