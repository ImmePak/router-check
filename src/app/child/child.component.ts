import { Component, OnInit } from '@angular/core';
import { CheckerService } from '../checker-service/checkerService.abstact.class';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private checker: CheckerService) { }

  ngOnInit(): void {
    this.checker.doSomething();
  }

}
