import { Injectable } from "@angular/core";
import { CheckerService } from "./checkerService.abstact.class";

 @Injectable({
    providedIn: 'root'
 })
 export class inRoot implements CheckerService {
     doSomething(): void {
         console.log('in root');
     }
}