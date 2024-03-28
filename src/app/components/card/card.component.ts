import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit{



  @Input()
  id:number=0;

  @Input()
  name:string | null=null;

  @Input()
  price:number=0;



  edit:any=faEdit
  delete:any=faTrash

  @Output()
  onDelete: EventEmitter<number> = new EventEmitter();



  constructor(private api:ApiService){

  }

  ngOnInit(): void {



  }



  handleClick(id:number):void{
    this.onDelete.emit(id);
  }



}
