import { Recipe } from './recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipies: Recipe[] = [
    new Recipe('Name', 'Desc', 'http://ultalife.co/blog/wp-content/uploads/2017/10/recipe-icon-150x150.jpeg'),
    new Recipe('Another recipe', 'Another Desc', 'http://ultalife.co/blog/wp-content/uploads/2017/10/recipe-icon-150x150.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
