import { RecipiesService } from './../recipe-list/recipies.service';
import { ShoppingService } from './../../shopping-list/shopping.service';
import { Recipe } from './../recipe-list/recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipiesService: RecipiesService) { }

  ngOnInit() {
  }

  addIngredientsToShoppingList() {
    this.recipiesService.addIngredientsToShoppingList(this.recipe);
  }

}
