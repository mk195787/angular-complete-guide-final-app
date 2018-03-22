import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipiesService {
    recipeSelected = new EventEmitter<Recipe>();

    recipies: Recipe[] = [
        new Recipe('Name', 'Desc', 'http://ultalife.co/blog/wp-content/uploads/2017/10/recipe-icon-150x150.jpeg'),
        new Recipe('Another recipe', 'Another Desc', 'http://ultalife.co/blog/wp-content/uploads/2017/10/recipe-icon-150x150.jpeg')
      ];

    getRecipies() {
        return this.recipies.slice();
    }
}
