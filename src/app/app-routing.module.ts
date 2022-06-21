import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckerService } from './checker-service/checkerService.abstact.class';
import { inAppComponent } from './checker-service/impl.inAppComponent';
import { inRouter } from './checker-service/impl.inRouter';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  { 
   path: '',
   providers: [
    //{ provide: CheckerService, useClass: inAppComponent} 
   ],
   children: [
    { 
      path: '',
      component: ChildComponent,
      providers: [
       { provide: CheckerService, useClass: inRouter} 
      ]
     }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
