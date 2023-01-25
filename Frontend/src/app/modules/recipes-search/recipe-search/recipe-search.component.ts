import { Component, OnInit, ViewChild } from '@angular/core';
import { Router }from '@angular/router';
import { Library, RecipesSearchService } from 'src/app/services/recipes-search.service';
import { AbstractControl, AbstractFormGroupDirective, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { subscribeOn } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['scss/animate.scss', 'scss/main.scss']
})

export class RecipeSearchComponent implements OnInit {

  public displayedColumns_recipe = ['name','Tags','byUser','actions'];
  public id = localStorage.getItem('link_id')||'1'
  public idUser = localStorage.getItem('idUser')||'1';

  constructor(
    private router: Router,
    private recipeService: RecipesSearchService,
    private _snackBar: MatSnackBar
  ) { }

  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  dataSourceC = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    this.recipeService.GetAllRecipes().subscribe(
      (result) => {
        for(let i = 0; i<result.length; i++)
        {
          this.dataSourceC.data[i] = { name: 'null', Tags: [], byUser: 'unkown', actions:['pull'], id: 0};;
          this.dataSourceC.data[i].name = result[i].name;
          this.dataSourceC.data[i].id = result[i].id;


            this.recipeService.GetAllRecipeTagsById(result[i].id).subscribe(
              (result2) => {
                for(let j = 0; j<result2.length && j<3; j++)
                {
                  this.dataSourceC.data[i].Tags.push(result2[j].nameTag);
                  
                }
              }
            )
          
            this.recipeService.GetUserById(result[i].idUser).subscribe(
              (result3) => {
                  this.dataSourceC.data[i].byUser = result3.user.userName;
              }
            )
          
        }      
        this.dataSource = this.dataSourceC; 
      },
      (error) => {
        console.error(error);
      }
    );
    
  }
  
  public search(): void{
    this.dataSourceC.data = []
    console.log(this.searchForm.value.recipe_name);
    this.recipeService.GetAllRecipesByName(this.searchForm.value.recipe_name).subscribe(
      (result) => {
        console.log(result)
        for(let i = 0; i<result.length; i++)
        {
          this.dataSourceC.data[i] = { name: 'null', Tags: [], byUser: 'unkown' , actions:['pull'], id: 0};;
          this.dataSourceC.data[i].name = result[i].name;
          this.dataSourceC.data[i].id = result[i].id;
          console.log(this.dataSourceC.data)


            this.recipeService.GetAllRecipeTagsById(result[i].id).subscribe(
              (result2) => {
                for(let j = 0; j<result2.length && j<3; j++)
                {
                  this.dataSourceC.data[i].Tags.push(result2[j].nameTag);
                  
                }
              }
            )
          
            this.recipeService.GetUserById(result[i].idUser).subscribe(
              (result3) => {
                  this.dataSourceC.data[i].byUser = result3.user.userName;
              }
            )
          
        }      
        this.dataSource.data = this.dataSourceC.data; 
        console.log(this.dataSourceC.data)
      },
      (error) => {
        console.error(error);
      }
    );

  }


  //Filter Dificulty

  public checkBoxDiff(cb: MatCheckboxChange): void{ 
    if(cb.checked){
        for(let i=0; i<this.dataSource.data.length; i++){
          if(this.dataSource.data[i].Tags.length>0)
          {
            var ok=0
            for(let j = 0; j<this.dataSource.data[i].Tags.length; j++){
              if(this.dataSource.data[i].Tags[j] == "easy" || this.dataSource.data[i].Tags[j] == "medium" || this.dataSource.data[i].Tags[j] == "hard")
                ok = 1
            }
            if(ok == 0)
            {
              this.dataSource.data.splice(i,1);
              i--;
            }
            
            
          }
          else
          {
            this.dataSource.data.splice(i,1);
            i--;
          }
            
        }
        this.dataSource.data = this.dataSource.data;
    }
    else
    {
      this.dataSourceC.data = []
      this.recipeService.GetAllRecipes().subscribe(
        (result) => {
          for(let i = 0; i<result.length; i++)
          {
            this.dataSourceC.data[i] = { name: 'null', Tags: [], byUser: 'unkown' , actions:['pull'], id: 0};;
            this.dataSourceC.data[i].name = result[i].name;
            this.dataSourceC.data[i].id = result[i].id;
  
  
              this.recipeService.GetAllRecipeTagsById(result[i].id).subscribe(
                (result2) => {
                  for(let j = 0; j<result2.length && j<3; j++)
                  {
                    this.dataSourceC.data[i].Tags.push(result2[j].nameTag);
                    
                  }
                }
              )
            
              this.recipeService.GetUserById(result[i].idUser).subscribe(
                (result3) => {
                    this.dataSourceC.data[i].byUser = result3.user.userName;
                }
              )
            
          }      
          console.log(this.dataSourceC.data);
          this.dataSource.data = this.dataSourceC.data; 
        },
        (error) => {
          console.error(error);
        }
      );
    }
    
      
  }


  // Filter time

  public checkBoxTime(cb: MatCheckboxChange): void{ 
    if(cb.checked){
        for(let i=0; i<this.dataSource.data.length; i++){
          if(this.dataSource.data[i].Tags.length>0)
          {
            var ok=0
            for(let j = 0; j<this.dataSource.data[i].Tags.length; j++){
              if(this.dataSource.data[i].Tags[j] == "short-time" || this.dataSource.data[i].Tags[j] == "average-time" || this.dataSource.data[i].Tags[j] == "long-time")
                ok = 1
            }
            if(ok == 0)
            {
              this.dataSource.data.splice(i,1);
              i--;
            }
            
            
          }
          else
          {
            this.dataSource.data.splice(i,1);
            i--;
          }
            
        }
        this.dataSource.data = this.dataSource.data;
    }
    else
    {
      this.dataSourceC.data = []
      this.recipeService.GetAllRecipes().subscribe(
        (result) => {
          for(let i = 0; i<result.length; i++)
          {
            this.dataSourceC.data[i] = { name: 'null', Tags: [], byUser: 'unkown', actions:['pull'], id: 0 };;
            this.dataSourceC.data[i].name = result[i].name;
            this.dataSourceC.data[i].id = result[i].id;
  
  
              this.recipeService.GetAllRecipeTagsById(result[i].id).subscribe(
                (result2) => {
                  for(let j = 0; j<result2.length && j<3; j++)
                  {
                    this.dataSourceC.data[i].Tags.push(result2[j].nameTag);
                    
                  }
                }
              )
            
              this.recipeService.GetUserById(result[i].idUser).subscribe(
                (result3) => {
                    this.dataSourceC.data[i].byUser = result3.user.userName;
                }
              )
            
          }      
          console.log(this.dataSourceC.data);
          this.dataSource.data = this.dataSourceC.data; 
        },
        (error) => {
          console.error(error);
        }
      );
    }
    
      
  }


  //Filter Price

  public checkBoxCost(cb: MatCheckboxChange): void{ 
    if(cb.checked){
        for(let i=0; i<this.dataSource.data.length; i++){
          if(this.dataSource.data[i].Tags.length>0)
          {
            var ok=0
            for(let j = 0; j<this.dataSource.data[i].Tags.length; j++){
              if(this.dataSource.data[i].Tags[j] == "cheap" || this.dataSource.data[i].Tags[j] == "moderate" || this.dataSource.data[i].Tags[j] == "expensive")
                ok = 1
            }
            if(ok == 0)
            {
              this.dataSource.data.splice(i,1);
              i--;
            }
            
            
          }
          else
          {
            this.dataSource.data.splice(i,1);
            i--;
          }
            
        }
        this.dataSource.data = this.dataSource.data;
    }
    else
    {
      this.dataSourceC.data = []
      this.recipeService.GetAllRecipes().subscribe(
        (result) => {
          for(let i = 0; i<result.length; i++)
          {
            this.dataSourceC.data[i] = { name: 'null', Tags: [], byUser: 'unkown' , actions:['pull'], id: 0};;
            this.dataSourceC.data[i].name = result[i].name;
            this.dataSourceC.data[i].id = result[i].id;
  
  
              this.recipeService.GetAllRecipeTagsById(result[i].id).subscribe(
                (result2) => {
                  for(let j = 0; j<result2.length && j<3; j++)
                  {
                    this.dataSourceC.data[i].Tags.push(result2[j].nameTag);
                    
                  }
                }
              )
            
              this.recipeService.GetUserById(result[i].idUser).subscribe(
                (result3) => {
                    this.dataSourceC.data[i].byUser = result3.user.userName;
                }
              )
            
          }      
          console.log(this.dataSourceC.data);
          this.dataSource.data = this.dataSourceC.data; 
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  public openSnackBar(message: string, action: string, favorite: number): void {
    

    let library = new Library(favorite, parseInt(this.idUser));

    this.recipeService.CreateLibrary(library).subscribe(
      (data) => {
        this._snackBar.open(message, action);
      },
      (error) => {
        this._snackBar.open("already added to favorites!", action);
        console.log(error);
      }
    )
  }

  public searchForm: FormGroup = new FormGroup({
    recipe_name: new FormControl(''),
  });

  get recipe_name(){
    return this.searchForm.get('recipe_name');
  }

  public logout(): void{
    localStorage.setItem('Role', 'Anonim');
    this.router.navigate(['/login']);
  }
  public save(id:string): void{
    localStorage.setItem('link_id',id);
  }

  public saveR(id:string): void{
    localStorage.setItem('idRecipe',id);
  }
  public del(): void{
    localStorage.removeItem('idRecipe');
  }

}

export interface Element {
  name: string;
  Tags: string[];
  byUser: string;
  actions: string[];
  id: number;

}

const ELEMENT_DATA: Element[] = [];

