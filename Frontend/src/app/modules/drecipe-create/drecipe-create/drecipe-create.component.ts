import { Component, OnInit, ViewChild } from '@angular/core';
import { Router }from '@angular/router';
import { CookedWith, DerivedRecipe, DerivedRecipeTag, MadeWith, Recipe, RecipesSearchService, RecipeTag, Tag } from 'src/app/services/recipes-search.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-recipe-create',
  templateUrl: './drecipe-create.component.html',
  styleUrls: ['scss/animate.scss', 'scss/main.scss']
})
export class DrecipeCreateComponent implements OnInit {

  public displayedColumns_tag = ['name'];
  public tagList: string[] = [];
  public oldRecipe: string = localStorage.getItem('recipeFinal') || "";
  public RecipeName: string = "";
  public pressed : number = 0;
  public idRecipe = localStorage.getItem('idRecipe') || '0';

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
    localStorage.setItem('idDerivedRecipe','0')
    this.recipeService.GetAllTags().subscribe(
      (result) => {
        this.dataSource.data = result;
      },
      (error) => {
        console.error(error);
      }
    );
    this.OldRecipeName();
    
  }

  public createForm: FormGroup = new FormGroup({
    tag_name: new FormControl(''),
  });

  public addTag(): void{
    let tag = new Tag(this.createForm.value.tag_name);
    this.recipeService.CreateTag(tag).subscribe(
      data => {
        this.recipeService.GetAllTags().subscribe(
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
    this.recipeService.GetTagByName(this.searchForm.value.tag_name).subscribe(
      (result) => {

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
    tag_name: new FormControl(''),
  });

  get tag_name(){
    return this.searchForm.get('tag_name');
  }

  public add(name: string): void{
    if(!this.tagList.includes(name)){
      this.tagList.push(name);
    }
    
    this.dataSourceAddedC.data = [];
    console.log(this.tagList);
    for(let i = 0; i<this.tagList.length; i++)
    {
      this.recipeService.GetTagByName(`${this.tagList[i]}`).subscribe(
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
    this.tagList.splice(this.tagList.indexOf(name),1);
    
    this.dataSourceAddedC.data = [];
    console.log(this.tagList);
    if(this.tagList.length == 0)
      this.dataSourceAdded.data = [];
    else
      for(let i = 0; i<this.tagList.length; i++)
      {
        this.recipeService.GetTagByName(`${this.tagList[i]}`).subscribe(
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

  public finish():void {
    let id:string = localStorage.getItem('idDerivedRecipe') || '0';
    if(id != '0')
      this.createTables();
    localStorage.removeItem('idDerivedRecipe');
  }

  public createTables(): void{
    let id = localStorage.getItem('idDerivedRecipe') || '1';

    for(let i = 0; i<this.tagList.length; i++)
      {
        var derivedRecipeTag = new DerivedRecipeTag(this.tagList[i], parseInt(id));
 
        this.recipeService.CreateDerivedRecipeTag(derivedRecipeTag).subscribe(
          (error) => {
            console.error(error);
          }
        );
      }
      localStorage.removeItem('idDerivedRecipe');
  }

  public createFormR: FormGroup = new FormGroup({
    recipe_name: new FormControl(''),
    recipe_description: new FormControl('')
  });

  public OldRecipeName(): void{
    this.recipeService.GetRecipeById(`${this.idRecipe}`).subscribe(
      data => {
          this.oldRecipe = data.recipeFinal;
          this.RecipeName = data.name+"-derived";
          this.createFormR.value.recipe_description = data.recipeFinal;

      }
    )
  }

  public addDerivedRecipe(): void{

    let recipe = new DerivedRecipe(this.RecipeName, this.createFormR.value.recipe_description, parseInt(this.idRecipe));
    
    if(this.pressed != 1){
      this.recipeService.CreateDerivedRecipe(recipe).subscribe(
        data => {
          localStorage.setItem('idDerivedRecipe',data.id);
        }
      )
      this.pressed = 1;
    }
    
  }

  public logout(): void{
    localStorage.setItem('Role', 'Anonim');
    this.router.navigate(['/login']);
  }

}



export interface Element {
  name: string;
}

const ELEMENT_DATA: Element[] = [];
