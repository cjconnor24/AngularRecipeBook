import { Ingredient } from './shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

  ingredientsChanges = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Banna',6)
  ];

  constructor() { }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanges.next(this.ingredients.slice());
  }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanges.next(this.ingredients.slice());
  }

}
