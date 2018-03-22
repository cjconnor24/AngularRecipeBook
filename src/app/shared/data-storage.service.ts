import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    return this.httpClient.put('https://recipeproject-d94ba.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes(){
    return this.httpClient.get<Recipe[]>('https://recipeproject-d94ba.firebaseio.com/recipes.json')
    .map(
      (recipes) => {
        // const recipes: Recipe[] = response.json();
        for(let recipe of recipes){
          if(!recipe['ingredients']){
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    ).subscribe(
      (recipes: Recipe[]) => {
        console.log('subscribe log runng');
        this.recipeService.setReceipes(recipes);
      }
    )
  }

}
