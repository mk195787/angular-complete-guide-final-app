import { ActivatedRoute, Params, Router } from '@angular/router';
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

  constructor(private recipiesService: RecipiesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.recipe = this.recipiesService.getRecipe(id);

    this.route.params.subscribe(
      (params: Params) => this.recipe = this.recipiesService.getRecipe(+params['id'])
    );
  }

  addIngredientsToShoppingList() {
    this.recipiesService.addIngredientsToShoppingList(this.recipe);
  }

  deleteRecipe() {
    const id = +this.route.snapshot.params['id'];
    this.recipiesService.deleteRecipe(id);
    this.router.navigate(['/recipies']);
  }

}
