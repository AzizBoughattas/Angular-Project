import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import * as fromApp from '../store/app.reducer'
import * as AuthActions from '../auth/store/auth.actions'
import * as RecipeActions from '../recipes/store/recipe.actions'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy{
  
  isAuthenticated = false;
  private userSub : Subscription;

  constructor(private dataStorageService : DataStorageService , private authService : AuthService , private store : Store<fromApp.AppState>) { }

  ngOnInit(): void {
  this.userSub =  this.store.select('auth').pipe(map(authState => authState.user )).subscribe(user => {
    this.isAuthenticated = !user ? false : true;
    
  })
  }

  onSaveData(){
   // this.dataStorageService.storeRecipes()
   this.store.dispatch(new RecipeActions.StoreRecipes())
  }

  onFetchData(){
   // this.dataStorageService.fetchrecipes().subscribe()
   this.store.dispatch(new RecipeActions.FetchRecipes())
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }

  onLogOut() {
    this.store.dispatch(new AuthActions.Logout())
  }
}

