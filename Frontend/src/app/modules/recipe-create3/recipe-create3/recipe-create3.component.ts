import { Component, OnInit, ViewChild } from '@angular/core';
import { Router }from '@angular/router';
import { Ingredient, MadeWith, RecipesSearchService } from 'src/app/services/recipes-search.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create3.component.html',
  styleUrls: ['scss/animate.scss', 'scss/main.scss']
})
export class RecipeCreate3Component implements OnInit {

  public displayedColumns_ingredient = ['name', 'price'];
  public ingredientList: string[] = [];

  constructor(
    private router: Router,
    private recipeService: RecipesSearchService,
  ) { }

  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  dataSourceAdded = new MatTableDataSource<Element>(ELEMENT_DATA);
  dataSourceAddedC = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceAdded.paginator = this.paginator;
  }

  ngOnInit() {
    this.recipeService.GetAllIngredients().subscribe(
      (result) => {
        this.dataSource.data = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public createForm: FormGroup = new FormGroup({
    ingredient_name: new FormControl(''),
    ingredient_price: new FormControl('')
  });

  public addIngredient(): void{
    let ingredient = new Ingredient(this.createForm.value.ingredient_name, this.createForm.value.ingredient_price);
    this.recipeService.CreateIngredient(ingredient).subscribe(
      data => {
        this.recipeService.GetAllIngredients().subscribe(
          (result) => {
            this.dataSource.data = result;
          },
          (error) => {
            console.error(error);
          }
        );
      }
    )
  }

  public search(): void{
    this.recipeService.GetIngredientByName(this.searchForm.value.ingredient_name).subscribe(
      (result) => {
        console.log(result.length);
        if(result.length > 0)
          this.dataSource.data = result;
        else
          this.dataSource.data = [result];
      },
      (error) => {
        console.error(error);
      }
    );

  }

  public searchForm: FormGroup = new FormGroup({
    ingredient_name: new FormControl(''),
  });

  get ingredient_name(){
    return this.searchForm.get('ingredient_name');
  }

  public add(name: string): void{
    if(!this.ingredientList.includes(name)){
      this.ingredientList.push(name);
    }
    
    this.dataSourceAddedC.data = [];
    console.log(this.ingredientList);
    for(let i = 0; i<this.ingredientList.length; i++)
    {
      this.recipeService.GetIngredientByName(`${this.ingredientList[i]}`).subscribe(
        (result) => {
          this.dataSourceAddedC.data.push(result);
          this.dataSourceAdded.data = this.dataSourceAddedC.data;
        },
        (error) => {
          console.error(error);
        }
      );
      
    }
  }

  public remove(name: string): void{
    this.ingredientList.splice(this.ingredientList.indexOf(name),1);
    
    this.dataSourceAddedC.data = [];
    console.log(this.ingredientList);
    if(this.ingredientList.length == 0)
      this.dataSourceAdded.data = [];
    else
      for(let i = 0; i<this.ingredientList.length; i++)
      {
        this.recipeService.GetIngredientByName(`${this.ingredientList[i]}`).subscribe(
          (result) => {
            this.dataSourceAddedC.data.push(result);
            this.dataSourceAdded.data = this.dataSourceAddedC.data;
          },
          (error) => {
            console.error(error);
          }
        );
        
      }
  }


  public createTables(): void{
    for(let i = 0; i<this.ingredientList.length; i++)
      {

        let id = localStorage.getItem('idRecipe') || '1';
        var madeWith = new MadeWith(this.ingredientList[i], parseInt(id));
 
        this.recipeService.CreateMadeWith(madeWith).subscribe(
          (error) => {
            console.error(error);
          }
        );
        
      }
  }

  public logout(): void{
    localStorage.setItem('Role', 'Anonim');
    this.router.navigate(['/login']);
  }

}

export interface Element {
  name: string;
  price: number;
}

const ELEMENT_DATA: Element[] = [];