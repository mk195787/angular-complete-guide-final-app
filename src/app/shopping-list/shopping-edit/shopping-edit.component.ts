import { Subscription } from 'rxjs/Subscription';
import { ShoppingService } from './../shopping.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm;

  editItemSubscription: Subscription;

  editMode = false;
  editedItemIndex: number;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.editItemSubscription = this.shoppingService.itemEdited.subscribe(index => {
      this.editMode = true;
      this.editedItemIndex = index;
      const editedItem = this.shoppingService.getIngredient(index);
      this.form.setValue({
        'name': editedItem.name,
        'amount': editedItem.amount
      });
    });
  }

  ngOnDestroy() {
    this.editItemSubscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const v = form.value;
    const item = new Ingredient(v.name, v.amount);

    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editedItemIndex, item);
    } else {
      this.shoppingService.addIngredient(item);
    }
    this.editMode = false;
    this.form.reset();
  }

  onClear() {
    this.editMode = false;
    this.form.reset();
  }

  onDelete() {
    if (this.editMode) {
      this.shoppingService.deleteIngredient(this.editedItemIndex);
    }
    this.editMode = false;
    this.form.reset();
  }
}
