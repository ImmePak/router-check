import { Injectable } from "@angular/core";
import { CheckerService } from "./checkerService.abstact.class";

 @Injectable()
 export class inAppComponent implements CheckerService {
     doSomething(): void {
         console.log('in AppComponent');
     }
}