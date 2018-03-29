import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingService {
    itemEdited = new Subject<number>();
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Carrot', 3),
        new Ingredient('Celery', 2)
    ];

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ing: Ingredient) {
        this.ingredients.push(ing);
        this.ingredientsChanged.next(this.ingredients);
    }

    updateIngredient(index: number, ing: Ingredient) {
        this.ingredients[index] = ing;
        this.ingredientsChanged.next(this.ingredients);
    }

    addIngredients(ings: Ingredient[]) {
        this.ingredients = this.ingredients.concat(ings);
        this.ingredientsChanged.next(this.ingredients);
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients);
    }
}
