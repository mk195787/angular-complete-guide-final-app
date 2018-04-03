import { Subscription } from 'rxjs/Subscription';
import { RecipiesService } from './recipies.service';
import { Recipe } from './recipe.model';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipies: Recipe[];
  subscription: Subscription;

  constructor(private recipiesService: RecipiesService) {}

  ngOnInit() {
    this.recipies = this.recipiesService.getRecipies();
    this.subscription = this.recipiesService.recipiesChanged.subscribe(o => {
      this.recipies = this.recipiesService.getRecipies();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
