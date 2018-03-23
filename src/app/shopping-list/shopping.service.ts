import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingService {
    ingredientAdded = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Carrot', 3),
        new Ingredient('Celery', 2)
    ];

    addIngredient(ing: Ingredient) {
        this.ingredients.push(ing);
        this.ingredientAdded.emit(this.ingredients);
    }

    addIngredients(ings: Ingredient[]) {
        this.ingredients = this.ingredients.concat(ings);
        this.ingredientAdded.emit(this.ingredients);
    }

    getIngredients() {
      return this.ingredients.slice();
    }
}
