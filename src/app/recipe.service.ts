import { EventEmitter } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a test recipe','https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.seriouseats.com%2Fimages%2F2015%2F09%2F20150914-pressure-cooker-recipes-roundup-09.jpg&f=1'),
    new Recipe('Lovely','Sounds Magic','https://proxy.duckduckgo.com/iur/?f=1&image_host=http%3A%2F%2Fwww.jerseybites.com%2Fwp-content%2Fuploads%2F2010%2F02%2Fpot-pie-close.jpg&u=http://jerseybites.com/wp-content/uploads/2010/02/pot-pie-close.jpg'),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }

}
