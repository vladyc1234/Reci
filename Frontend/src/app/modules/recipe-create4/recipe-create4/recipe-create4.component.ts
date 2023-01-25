import { Component, OnInit, ViewChild } from '@angular/core';
import { Router }from '@angular/router';
import { RecipesSearchService, RecipeTag, Tag } from 'src/app/services/recipes-search.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create4.component.html',
  styleUrls: ['scss/animate.scss', 'scss/main.scss']
})
export class RecipeCreate4Component implements OnInit {

  public displayedColumns_tag = ['name'];
  public tagList: string[] = [];

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
    this.recipeService.GetAllTags().subscribe(
      (result) => {
        this.dataSource.data = result;
      },
      (error) => {
        console.error(error);
      }
    );
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

  public createTables(): void{
    for(let i = 0; i<this.tagList.length; i++)
      {

        let id = localStorage.getItem('idRecipe') || '1';
        var recipeTag = new RecipeTag(this.tagList[i], parseInt(id));
 
        this.recipeService.CreateRecipeTag(recipeTag).subscribe(
          (error) => {
            console.error(error);
          }
        );
        
      }
      localStorage.removeItem('idRecipe');
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
