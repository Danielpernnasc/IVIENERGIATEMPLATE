import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SimpleModalComponent } from './simple-modal/simple-modal.component';


@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.component.html',
  styleUrls: ['./basic-modal.component.scss']
})
export class BasicModalComponent {

  constructor(private modal : NgbModal){}

  simpleModal(){
    this.modal.open(SimpleModalComponent)
  }


}
