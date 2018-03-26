import { ShoppingService } from './../../shopping-list/shopping.service';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Injectable()
export class RecipiesService {
    recipies: Recipe[] = [
        new Recipe(
            0,
            'Name',
            'Desc',
            'http://ultalife.co/blog/wp-content/uploads/2017/10/recipe-icon-150x150.jpeg',
            [new Ingredient('bun', 2), new Ingredient('meat', 1)]),
        new Recipe(
            1,
            'Another recipe',
            'Another Desc',
            'http://ultalife.co/blog/wp-content/uploads/2017/10/recipe-icon-150x150.jpeg',
            [new Ingredient('flour', 1), new Ingredient('meat', 1)])
        ];

    constructor(private shoppingService: ShoppingService) {}


    getRecipies() {
        return this.recipies.slice();
    }

    getRecipe(id: number): Recipe {
        return this.recipies[id];
    }

    addIngredientsToShoppingList(recipe: Recipe) {
        this.shoppingService.addIngredients(recipe.ingredients);
    }
}

