import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  ingredientsChanged: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    // SUBSCRIBE TO THE EVENT CHANGED
    this.ingredientsChanged = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  onEditItem(index:number){
    this.shoppingListService.startedEditing.next(index);
  }



  ngOnDestroy(){
    this.ingredientsChanged.unsubscribe();
    console.log("Shopping List Subscription UNSUBSCRIBED");
  }

  // onIngredientAdded(ingredient: Ingredient){
  //   // this.ingredients.push(ingredient);
  //   this.shoppingListService.addIngredient(ingredient);
  // }

}
