import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions'
import * as fromApp from '../store/app.reducer'

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>()

  constructor( private route : ActivatedRoute , private store : Store<fromApp.AppState>) { }

//  private recipes: Recipe[] = [
//     new Recipe('Tasty Burger','a super tasty BURGER BITCHESS',
//     'https://i.f1g.fr/media/eidos/616x347_cropupscale/2021/10/13/XVM8f905250-2b38-11ec-9370-7e9ee94f28c7.jpg',
//     [
//       new Ingredient('Meat',1),
//       new Ingredient('French Fries',20)
//     ]),
//     new Recipe('Tasty Pizza','this is a cheesy , tasty fucking pizzaaaaa',
//     'https://www.atelierdeschefs.com/media/recette-e30299-pizza-pepperoni-tomate-mozza.jpg',
//     [
//       new Ingredient('Buns',2),
//       new Ingredient('Meat',1)
//     ])
//   ] ;
private recipes : Recipe[] = []

  setRecipes(recipess : Recipe[]) {
    this.recipes = recipess
    console.log(this.recipes.slice())
    this.recipesChanged.next(this.recipes.slice())
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients : Ingredient[]) {
   // this.shoppingListService.addIngredients(ingredients);
   this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients))
  }

  getRecipeUrl (id : number) {
    return this.recipes[id];
  }

  addRecipe(recipe : Recipe) {
    this.recipes.push(recipe)
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index : number , newRecipe : Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index : number) {
    this.recipes.splice(index , 1)
    this.recipesChanged.next(this.recipes.slice())
  }

  
}
