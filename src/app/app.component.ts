import { Component } from '@angular/core';
import { CheckerService } from './checker-service/checkerService.abstact.class';
import { inAppComponent } from './checker-service/impl.inAppComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
     {provide: CheckerService, useClass: inAppComponent }
  ]
})
export class AppComponent {
  title = 'router-check';
}
