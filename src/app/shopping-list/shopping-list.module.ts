import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoggingService } from "../logging.service";
import { SharedModule } from "../shared/shared.module";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
    declarations : [
        ShoppingListComponent,
        ShoppingEditComponent,
    ] ,
    imports : [
        RouterModule,CommonModule,FormsModule,ShoppingListRoutingModule,SharedModule
    ] ,
   // providers : [LoggingService]
})
export class ShoppingListModule {}