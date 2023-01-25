import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router }from '@angular/router';
import { CookedWith, RecipesSearchService, Utensil } from 'src/app/services/recipes-search.service';
@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create2.component.html',
  styleUrls: ['scss/animate.scss', 'scss/main.scss']
})
export class RecipeCreate2Component implements OnInit {

  public displayedColumns_utensil = ['name', 'description'];
  public utensilList: string[] = [];

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
    this.recipeService.GetAllUtensils().subscribe(
      (result) => {
        this.dataSource.data = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public createForm: FormGroup = new FormGroup({
    utensil_name: new FormControl(''),
    utensil_description: new FormControl('')
  });

  public addUtensil(): void{
    let utensil = new Utensil(this.createForm.value.utensil_name, this.createForm.value.utensil_description);
    this.recipeService.CreateUtensil(utensil).subscribe(
      data => {
        this.recipeService.GetAllUtensils().subscribe(
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
    this.recipeService.GetUtensilByName(this.searchForm.value.utensil_name).subscribe(
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
    utensil_name: new FormControl(''),
  });

  get utensil_name(){
    return this.searchForm.get('utensil_name');
  }

  public add(name: string): void{
    if(!this.utensilList.includes(name)){
      this.utensilList.push(name);
    }
    
    this.dataSourceAddedC.data = [];
    console.log(this.utensilList);
    for(let i = 0; i<this.utensilList.length; i++)
    {
      this.recipeService.GetUtensilByName(`${this.utensilList[i]}`).subscribe(
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
    this.utensilList.splice(this.utensilList.indexOf(name),1);
    
    this.dataSourceAddedC.data = [];
    console.log(this.utensilList);
    if(this.utensilList.length == 0)
      this.dataSourceAdded.data = [];
    else
      for(let i = 0; i<this.utensilList.length; i++)
      {
        this.recipeService.GetUtensilByName(`${this.utensilList[i]}`).subscribe(
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
    for(let i = 0; i<this.utensilList.length; i++)
      {

        let id = localStorage.getItem('idRecipe') || '1';
        var cookedWith = new CookedWith(this.utensilList[i], parseInt(id));
 
        this.recipeService.CreateCookedWith(cookedWith).subscribe(
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
  description: string;
}

const ELEMENT_DATA: Element[] = [];