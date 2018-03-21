import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../recipe.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  subscriber: Subscription;

  

  constructor(private recipeService: RecipeService) { }

//   onRecipeSelected(recipe: Recipe){
// this.recipeWasSelected.emit(recipe);
//   }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscriber = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[])=>{
        this.recipes = recipes;
      }
    )
  }

  ngOnDestroy(){
    this.subscriber.unsubscribe();
  }

}
