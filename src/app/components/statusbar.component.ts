import { Component, OnInit } from '@angular/core';
import { context, MainService } from '../services/main.service';

@Component({  selector: 'app-statusbar', templateUrl: './statusbar.component.html', })
export class StatusbarComponent
{
  readonly context = context
  constructor( private main:MainService ) {
  }
  // ngOnInit() { }
}