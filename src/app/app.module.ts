import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckerService } from './checker-service/checkerService.abstact.class';
import { inRoot } from './checker-service/impl.inRoot';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: CheckerService, useClass: inRoot}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
