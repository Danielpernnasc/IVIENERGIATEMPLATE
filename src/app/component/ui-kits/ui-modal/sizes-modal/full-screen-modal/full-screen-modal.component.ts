import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as Data from '../../../../../shared/data/data/ui-kits/ui-modal';

@Component({
  selector: 'app-full-screen-modal',
  templateUrl: './full-screen-modal.component.html',
  styleUrls: ['./full-screen-modal.component.scss']
})
export class FullScreenModalComponent {

  public modalData = Data.modalData;
  
  constructor(private modal: NgbModal) { }

  close(){
    this.modal.dismissAll();
  }
}
