import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe','Test one','http://via.placeholder.com/350x150'),
    new Recipe('Another one','Test two','http://via.placeholder.com/150x150'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
