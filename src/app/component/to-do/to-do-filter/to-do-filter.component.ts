import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-filter',
  templateUrl: './to-do-filter.component.html',
  styleUrls: ['./to-do-filter.component.scss']
})
export class ToDoFilterComponent {

  public isOpen : boolean = false;

  openFilter(){
    this.isOpen =! this.isOpen;
  }
}
