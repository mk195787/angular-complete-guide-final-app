import { ShoppingService } from './../../shopping-list/shopping.service';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipiesService {
    recipiesChanged = new Subject<Recipe[]>();

    recipies: Recipe[] = [
        new Recipe(
            'Name',
            'Desc',
            'http://ultalife.co/blog/wp-content/uploads/2017/10/recipe-icon-150x150.jpeg',
            [new Ingredient('bun', 2), new Ingredient('meat', 1)]),
        new Recipe(
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

    addRecipe(recipe: Recipe) {
        this.recipies.push(recipe);
        this.recipiesChanged.next(this.recipies.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipies[index] = recipe;
        this.recipiesChanged.next(this.recipies.slice());
    }

    deleteRecipe(index: number) {
        this.recipies.splice(index, 1);
        this.recipiesChanged.next(this.recipies.slice());
    }
}

