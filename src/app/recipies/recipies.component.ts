import { RecipiesService } from './recipe-list/recipies.service';
import { Recipe } from './recipe-list/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  constructor(private recipiesService: RecipiesService) {}

  ngOnInit() {
  }
}
