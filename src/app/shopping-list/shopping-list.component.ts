import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from './shopping-list.service';
import * as fromApp from '../store/app.reducer'
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit ,OnDestroy{

  ingredients :Observable<{ingredients : Ingredient[]}> 
  private subscription : Subscription;
  constructor( private loggingService : LoggingService,private store : Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.ingredients= this.store.select('shoppingList');
    // this.ingredients = this.shoppingList.getIngredients();
    // this.subscription=this.shoppingList.ingredientChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // )

    this.loggingService.printLog('Hello from ShoppingListComponenet ngOninit')
  }

  onEditItem(index :number){
  //  this.shoppingList.startedEditing.next(index);
  this.store.dispatch(new ShoppingListActions.StartEdit(index))
  }

  ngOnDestroy(): void {
  //  this.subscription.unsubscribe();
  }

}
