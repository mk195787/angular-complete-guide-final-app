import { RecipiesService } from './../recipe-list/recipies.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  form: FormGroup;
  ingredientsForm: FormArray;

  constructor(private route: ActivatedRoute, private recipiesService: RecipiesService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
    this.initForm();
  }

  onSubmit() {
    if (this.editMode) {
      this.recipiesService.updateRecipe(this.id, this.form.value);
    } else {
      this.recipiesService.addRecipe(this.form.value);
    }
  }

  onAddIngedient() {
    this.ingredientsForm.push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9][0-9]*$/)])
    }));
  }

  initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    this.ingredientsForm = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipiesService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      for (const ing of recipe.ingredients) {
        this.ingredientsForm.push(new FormGroup({
          'name': new FormControl(ing.name, Validators.required),
          'amount': new FormControl(ing.amount, [
            Validators.required,
            Validators.pattern(/^[1-9][0-9]*$/)])
        }));
      }
    }

    this.form = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': this.ingredientsForm
    });
  }
}
