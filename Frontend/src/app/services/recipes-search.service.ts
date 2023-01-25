import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipesSearchService {

  //PRIMARY TABLE LINKS

  public url_recipe = 'https://localhost:44379/api/Recipe';
  public url_recipe_id = 'https://localhost:44379/api/Recipe';
  public url_recipe_name = 'https://localhost:44379/api/Recipe'
  public url_utensil = 'https://localhost:44379/api/Utensil';
  public url_utensil_name = 'https://localhost:44379/api/Utensil';
  public url_ingredient = 'https://localhost:44379/api/Ingredient';
  public url_ingredient_name = 'https://localhost:44379/api/Ingredient';
  public url_tag = 'https://localhost:44379/api/Tag';
  public url_tag_name = 'https://localhost:44379/api/Tag';
  public url_user = 'https://localhost:44379/api/User'
  public url_derivedRecipe = 'https://localhost:44379/api/DerivedRecipe';


  //ASOCIATIVE TABLE LINKS

  public url_cookedWith = 'https://localhost:44379/api/CookedWith';
  public url_madeWith = 'https://localhost:44379/api/MadeWith';
  public url_recipeTag = 'https://localhost:44379/api/RecipeTag';
  public url_derivedTag = 'https://localhost:44379/api/DerivedTag';
  public url_library = 'https://localhost:44379/api/Library';

  constructor(
    public http: HttpClient,
  ) { }
  

  //GET FUNCTIONS

  public GetAllRecipes(): Observable<any> {
    return this.http.get(`${this.url_recipe}`);
  }

  public GetRecipeById(id:string): Observable<any> {
    return this.http.get(`${this.url_recipe}/${id}`);
  }

  public GetAllRecipesByName(name:string): Observable<any> {
    return this.http.get(`${this.url_recipe}/${name}`);
  }

  public GetAllUtensils(): Observable<any> {
    return this.http.get(`${this.url_utensil}`);
  }

  public GetUtensilByName(name:string): Observable<any> {
    
    return this.http.get(`${this.url_utensil_name}/${name}`);
    
  }

  public GetAllIngredients(): Observable<any> {
    return this.http.get(`${this.url_ingredient}`);
  }

  public GetIngredientByName(name:string): Observable<any> {
    
    return this.http.get(`${this.url_ingredient_name}/${name}`);
    
  }

  public GetAllTags(): Observable<any> {
    return this.http.get(`${this.url_tag}`);
  }

  public GetTagByName(name:string): Observable<any> {
    
    return this.http.get(`${this.url_tag_name}/${name}`);
    
  }

  public GetUserById(id:string): Observable<any> {
    return this.http.get(`${this.url_user}/${id}`);
  }

  public GetAllDerivedRecipe(): Observable<any> {
    return this.http.get(`${this.url_derivedRecipe}`);
  }

  public GetDerivedRecipeById(id:string): Observable<any> {
    return this.http.get(`${this.url_derivedRecipe}/${id}`);
  }

  public DeleteDerivedRecipeById(id:string): Observable<any> {
    return this.http.delete(`${this.url_derivedRecipe}/${id}`);
  }

  //POST FUNCTIONS FOR PRIMARY TABLES

  public CreateRecipe(recipe: Recipe): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(recipe);
    console.log(body)
    return this.http.post(this.url_recipe, body,{'headers':headers})
  }

  public CreateDerivedRecipe(derivedRecipe: DerivedRecipe): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(derivedRecipe);
    console.log(body)
    return this.http.post(this.url_derivedRecipe, body,{'headers':headers})
  }

  public CreateUtensil(utensil: Utensil): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(utensil);
    console.log(body)
    return this.http.post(this.url_utensil, body,{'headers':headers})
  }

  public CreateIngredient(ingredient: Ingredient): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(ingredient);
    console.log(body)
    return this.http.post(this.url_ingredient, body,{'headers':headers})
  }

  public CreateTag(tag: Tag): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(tag);
    console.log(body)
    return this.http.post(this.url_tag, body,{'headers':headers})
  }

  public CreateDerivedTag(tag: Tag): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(tag);
    console.log(body)
    return this.http.post(this.url_tag, body,{'headers':headers})
  }

  //GET FUNCTIONS FOR ASOCIATIVE TABELS

  public GetAllCookedWithsById(id: string): Observable<any>{
    return this.http.get(`${this.url_cookedWith}/${id}`);
  }
  
  public GetAllMadeWithsById(id: string): Observable<any>{
    return this.http.get(`${this.url_madeWith}/${id}`);
  }

  public GetAllRecipeTagsById(id: string): Observable<any>{
    return this.http.get(`${this.url_recipeTag}/${id}`);
  }

  public GetAllDerivedTagsById(id: string): Observable<any>{
    return this.http.get(`${this.url_derivedTag}/${id}`);
  }

  public GetAllLibrariesById(id: string): Observable<any>{
    return this.http.get(`${this.url_library}/${id}`);
  }

  //POST FUNCTIONS FOR ASOCIATIVE TABLES

  public CreateCookedWith(cookedWith: CookedWith): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(cookedWith);
    console.log(body)
    return this.http.post(this.url_cookedWith, body,{'headers':headers})
  }

  public CreateMadeWith(madeWith: MadeWith): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(madeWith);
    console.log(body)
    return this.http.post(this.url_madeWith, body,{'headers':headers})
  }

  public CreateRecipeTag(recipeTag: RecipeTag): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(recipeTag);
    console.log(body)
    return this.http.post(this.url_recipeTag, body,{'headers':headers})
  }

  public CreateDerivedRecipeTag(derivedRecipeTag: DerivedRecipeTag): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(derivedRecipeTag);
    console.log(body)
    return this.http.post(this.url_derivedTag, body,{'headers':headers})
  }

  public CreateLibrary(library: Library): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(library);
    console.log(body)
    return this.http.post(this.url_library, body,{'headers':headers})
  }
}

//CLASSES FOR PRIMARY TABLES

export class Recipe{
  name: string;
  recipeFinal: string;
  creationDate: Date;
  idUser: number;
  rating: number;

  constructor(name: string, recipeFinal: string, idUser: number){
    this.name = name;
    this.recipeFinal = recipeFinal;
    this.creationDate = new Date();
    this.idUser = idUser;
    this.rating = 0;
  };

}

export class DerivedRecipe{
  name: string;
  DerivedRecipeFile: string;
  creationDate: Date;
  idRecipe: number;
  rating: number;

  constructor(name: string, DerivedRecipeFile: string, idRecipe: number){
    this.name = name;
    this.DerivedRecipeFile = DerivedRecipeFile;
    this.creationDate = new Date();
    this.idRecipe = idRecipe;
    this.rating = 0;
  };

}

export class Utensil{
  name: string;
  description: string;

  constructor(name: string, description: string){
    this.name = name;
    this.description = description;
  };

}

export class Ingredient{
  name: string;
  price: number;

  constructor(name: string, price: number){
    this.name = name;
    this.price = price;
  };

}

export class Tag{
  name: string;

  constructor(name: string){
    this.name = name;
  };

}

//CLASSES FOR ASOCIATIVE TABLES

export class CookedWith{
  name: string;
  idRecipe: number;

  constructor(name: string, idRecipe: number){
    this.name = name;
    this.idRecipe = idRecipe;
  };

}

export class MadeWith{
  name: string;
  idRecipe: number;

  constructor(name: string, idRecipe: number){
    this.name = name;
    this.idRecipe = idRecipe;
  };

}

export class RecipeTag{
  nameTag: string;
  idRecipe: number;

  constructor(nameTag: string, idRecipe: number){
    this.nameTag = nameTag;
    this.idRecipe = idRecipe;
  };

}

export class DerivedRecipeTag{
  nameTag: string;
  idDerivedRecipe: number;

  constructor(nameTag: string, idDerivedRecipe: number){
    this.nameTag = nameTag;
    this.idDerivedRecipe = idDerivedRecipe;
  };

}

export class Library{
  idRecipe: number;
  idUser: number;
  constructor(idRecipe: number, idUser: number){
    this.idRecipe = idRecipe;
    this.idUser = idUser;
  };
}
