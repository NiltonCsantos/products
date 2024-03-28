import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from 'src/app/animation';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  animations:[slideInAnimation]
})


export class MainContentComponent {

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }


}
