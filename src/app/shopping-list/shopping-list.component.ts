import { ShoppingService } from './shopping.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.subscription = this.shoppingService.ingredientsChanged.subscribe(
      (ings: Ingredient[]) => this.ingredients = ings
    );
    this.ingredients = this.shoppingService.getIngredients();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingService.itemEdited.next(index);
  }
}
