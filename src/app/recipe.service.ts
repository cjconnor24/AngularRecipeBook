import { Injectable } from '@angular/core';
import { Recipe } from './recipes/recipe.model';
import { Ingredient } from './shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Bolognese',
      'This is a test recipe',
      'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.seriouseats.com%2Fimages%2F2015%2F09%2F20150914-pressure-cooker-recipes-roundup-09.jpg&f=1',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Onions', 2),
        new Ingredient('Garlic', 1)
      ]),
    new Recipe(
      'Burger',
      'Sounds Magic',
      'https://proxy.duckduckgo.com/iur/?f=1&image_host=http%3A%2F%2Fwww.jerseybites.com%2Fwp-content%2Fuploads%2F2010%2F02%2Fpot-pie-close.jpg&u=http://jerseybites.com/wp-content/uploads/2010/02/pot-pie-close.jpg',
      [
        new Ingredient('Patty', 1),
        new Ingredient('Buns', 2),
        new Ingredient('Cheese', 1),
        new Ingredient('Relish', 1),
      ]),
  ];

  // recipeSelected = new EventEmitter<Recipe>();

  constructor(private shopingListService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shopingListService.addIngredients(ingredients);
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, recipe:Recipe){
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

}
