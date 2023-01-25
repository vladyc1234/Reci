import { Component, OnInit, ViewChild } from '@angular/core';
import { Router }from '@angular/router';
import { RecipesSearchService } from 'src/app/services/recipes-search.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe-template',
  templateUrl: './recipe-template.component.html',
  styleUrls: ['scss/animate.scss', 'scss/main.scss']
})

export class RecipeTemplateComponent implements OnInit{

  public displayedColumns_recipe = ['name', 'description', 'userName', 'ingredients', 'utensils'];
  public id = localStorage.getItem('link_id')||'1';
  public data:string[] = [];
  

  constructor(
    private router: Router,
    private recipeService: RecipesSearchService,
  ) { }

  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
   ngOnInit() {
    this.recipeService.GetRecipeById(this.id).subscribe(
      (result) => {
        this.dataSource.data[0] = { name: 'null', description: "", userName: 'null', ingredients: [] , utensils: []};;

        this.dataSource.data[0].name = result.name;
        this.dataSource.data[0].description = result.recipeFinal;

        this.recipeService.GetAllMadeWithsById(result.id).subscribe(
          (result2) => {
            for (let j = 0; j < result2.length; j++) {
              this.dataSource.data[0].ingredients.push(result2[j].name);
              
            }
          }
        )
        this.recipeService.GetAllCookedWithsById(result.id).subscribe(
          (result2) => {
            for (let j = 0; j < result2.length; j++) {
              this.dataSource.data[0].utensils.push(result2[j].name);
              
            }
          }
        )
        this.recipeService.GetUserById(result.idUser).subscribe(
          (result3) => {
            this.dataSource.data[0].userName = result3.user.userName;
          }
        )

        
        this.dataSource.data = this.dataSource.data;
        console.log(this.dataSource.data)

      },
      (error) => {
        console.error(error);
      }
    );


  }

  


  public logout(): void{
    localStorage.setItem('Role', 'Anonim');
    this.router.navigate(['/login']);
  }

  

}


export interface Element {
  name: string;
  description: string;
  userName: string;
  ingredients: string[];
  utensils: string[];
}

const ELEMENT_DATA: Element[] = [];

  


