import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit ,OnDestroy{

  ingredients :Ingredient[];
  private subscription : Subscription;
  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingList.getIngredients();
    this.subscription=this.shoppingList.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  onEditItem(index :number){
    this.shoppingList.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
