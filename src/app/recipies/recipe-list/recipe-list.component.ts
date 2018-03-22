import { RecipiesService } from './recipies.service';
import { Recipe } from './recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[];

  constructor(private recipiesService: RecipiesService) {}

  ngOnInit() {
    this.recipies = this.recipiesService.getRecipies();
  }
}
