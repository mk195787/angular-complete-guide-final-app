import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingService {
    ingredientAdded = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Carrot', 3),
        new Ingredient('Celery', 2)
    ];

    addIngredient(ing: Ingredient) {
        this.ingredients.push(ing);
        this.ingredientAdded.next(this.ingredients);
    }

    addIngredients(ings: Ingredient[]) {
        this.ingredients = this.ingredients.concat(ings);
        this.ingredientAdded.next(this.ingredients);
    }

    getIngredients() {
      return this.ingredients.slice();
    }
}
