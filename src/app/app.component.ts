import { animation } from '@angular/animations';
import { Component } from '@angular/core';
import { slideInAnimation } from './animation';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[slideInAnimation]
})
export class AppComponent {
  title = 'products';

  }
