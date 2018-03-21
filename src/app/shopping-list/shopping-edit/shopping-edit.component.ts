import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, OnDestroy } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list.service';
import { FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  editModeSubscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('f') shoppingListForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editModeSubscription = this.shoppingListService.startedEditing.subscribe(
      (index:number)=>{

        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  ngOnDestroy(){
    this.editModeSubscription.unsubscribe();
  }

  onSubmitIngredient(form: NgForm){
    // console.log(f);
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    // this.ingredientAdded.emit(newIngredient);
    if(this.editMode){

      this.shoppingListService.updateIngredient(this.editedItemIndex,newIngredient);

    } else {

    this.shoppingListService.addIngredient(newIngredient);

    }

    this.editMode = false;
    form.resetForm();
  }

  onClear(){
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  deleteIngredient(){
    this.onClear();
   this.shoppingListService.deleteIngredient(this.editedItemIndex); 
  }

}
