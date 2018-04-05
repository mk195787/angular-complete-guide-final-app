import { AuthService } from './auth/auth.service';
import { Recipe } from './recipies/recipe-list/recipe.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
              private authService: AuthService) { }

  storeRecipies(recipies: Recipe[]) {
    return this.http.put('https://ng-recipe-book-9ca78.firebaseio.com/recipies.json', recipies);
  }

  fetchRecipies() {
    const token = this.authService.getToken();

    return this.http.get('https://ng-recipe-book-9ca78.firebaseio.com/recipies.json?auth=' + token)
        .map((response: Response) => {
          const recipies = response.json();
          for (const recipe of recipies) {
            if (! recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipies;
        });
  }

}
