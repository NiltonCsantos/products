import { Component } from '@angular/core';
import { dropdownAnimation, rotateAnimation } from 'src/app/animation';


import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  animations: [dropdownAnimation, rotateAnimation],
})
export class SidebarComponent {

  faChevronDown:any=faChevronDown

  dropdownStateSport:string = 'hidden';

  dropdownStateEvent:string = 'hidden';

  rotateSport:boolean = false;
  rotateEvent:boolean = false;


  toggleDropdownEvent():void {

    this.dropdownStateEvent = this.dropdownStateEvent === 'hidden' ? 'visible' : 'hidden';
    this.dropdownStateSport='hidden';

    this.toggleRotateEvent()

    if(this.rotateSport===true){
      this.toggleRotateSport()
    }
  }
  toggleDropdownSport():void {

    this.dropdownStateSport = this.dropdownStateSport === 'hidden' ? 'visible' : 'hidden';
    this.dropdownStateEvent='hidden';

    this.toggleRotateSport()

    if(this.rotateEvent===true){
      this.toggleRotateEvent()
    }

  }

  toggleRotateSport():void{
    this.rotateSport = !this.rotateSport;
  }
  toggleRotateEvent():void{
    this.rotateEvent = !this.rotateEvent;
  }

}
