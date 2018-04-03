import { Recipe } from './../recipies/recipe-list/recipe.model';
import { RecipiesService } from './../recipies/recipe-list/recipies.service';
import { DataStorageService } from './../data-storage.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService,
              private recipiesService: RecipiesService) { }

  ngOnInit() {
  }

  onSave() {
    this.dataStorageService.storeRecipies(this.recipiesService.getRecipies())
        .subscribe(o => {
          console.log(o);
        });
  }

  onFetch() {
    this.dataStorageService.fetchRecipies()
        .subscribe((recipies: Recipe[]) => {
          this.recipiesService.setRecipies(recipies);
        });
  }
}
