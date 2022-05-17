import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, take, tap,exhaustMap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({
    providedIn : 'root'
})
export class DataStorageService {

constructor(private http : HttpClient, private recipeService : RecipeService , private authService : AuthService) {
}

storeRecipes() {
const recipes = this.recipeService.getRecipes();
 this.http.put('https://ng-course-project-4c507-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe(response => {
     console.log(response)
 })
}

fetchrecipes(){
    //take nekhou mara barka o 1 maaneha bch nekhou valeur barka subscribi leha o unscribi bead mayekhou auto
    //exhaustmap : testana observable louwel to complete o bead tetaada l theni
     
        return this.http.get<Recipe[]>('https://ng-course-project-4c507-default-rtdb.firebaseio.com/recipes.json'
       ).pipe(
    map(recipes => {
        return recipes.map(recipe => {
            return  {...recipe , ingredients : recipe.ingredients ? recipe.ingredients : []}
        })
    }), tap(recipes => this.recipeService.setRecipes(recipes))
    )
    

   
}
}