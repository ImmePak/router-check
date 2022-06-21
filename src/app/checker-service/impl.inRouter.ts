import { Injectable } from "@angular/core";
import { CheckerService } from "./checkerService.abstact.class";

 @Injectable()
 export class inRouter implements CheckerService {
     doSomething(): void {
         console.log('in Router');
     }
}