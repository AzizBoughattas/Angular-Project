// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
// import { Ingredient } from '../shared/ingredient.model';

// @Injectable()
// export class ShoppingListService {
//   ingredientChanged = new Subject<Ingredient[]>();
//   startedEditing = new Subject<number>();
//  private ingredients :Ingredient[]= [
//     new Ingredient('Apples',5),
//     new Ingredient('Tomatos',15),
//   ];
//   constructor() { }

//   onIngredientAdded(ingredient : Ingredient){
//     this.ingredients.push(ingredient);
//     this.ingredientChanged.next(this.ingredients.slice());
//   }

//   getIngredients() {
//     return this.ingredients.slice(); //nahiw slice o maghir eventemitter twali tekhdem jawha behi
//   }
//  addIngredients (ingredients :Ingredient[]) {
//   //  for (let ingredient of ingredients) {
//   //    this.onIngredientAdded(ingredient);
//   //  }
//   this.ingredients.push(...ingredients);
//   this.ingredientChanged.next(this.ingredients.slice())
//  }

//  getIngredient(index : number) {
//    return this.ingredients[index]
//  }

//  updateIngredient(index : number , newIngredient : Ingredient){
//   this.ingredients[index] = newIngredient;
//   this.ingredientChanged.next(this.ingredients.slice());
//  }

//  deleteIngredient(index : number){
//   this.ingredients.splice(index,1)
//   this.ingredientChanged.next(this.ingredients.slice())
//  }
// }
