import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoggingService } from "../logging.service";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponenet } from "./loading-spinner/loading-spinner.component";

@NgModule({
    declarations : [
        AlertComponent,
        LoadingSpinnerComponenet,
        DropdownDirective
    ],
    imports : [
        CommonModule
    ],
    exports : [
        AlertComponent,
        LoadingSpinnerComponenet,
        DropdownDirective,
        CommonModule
    ],
    providers : [LoggingService]
})
export class SharedModule {}