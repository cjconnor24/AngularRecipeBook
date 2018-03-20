import { Recipe } from './recipes/recipe.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a test recipe','https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.seriouseats.com%2Fimages%2F2015%2F09%2F20150914-pressure-cooker-recipes-roundup-09.jpg&f=1'),
    new Recipe('Lovely','Sounds Magic','https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.seriouseats.com%2Fimages%2F2015%2F09%2F20150914-pressure-cooker-recipes-roundup-09.jpg&f=1'),
  ];

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }

}
