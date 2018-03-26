import { RecipeEditComponent } from './recipies/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipiesNothingComponent } from './recipies/recipies-nothing/nothing.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipies', pathMatch: 'full' },
    { path: 'recipies', component: RecipiesComponent, children: [
        { path: '', component: RecipiesNothingComponent, pathMatch: 'full'},
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent }
    ]},
    { path: 'shopping-list', component: ShoppingListComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}