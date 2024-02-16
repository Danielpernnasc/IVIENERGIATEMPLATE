import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as Data from '../../../../../shared/data/data/ui-kits/ui-modal';

@Component({
  selector: 'app-large-modal',
  templateUrl: './large-modal.component.html',
  styleUrls: ['./large-modal.component.scss']
})
export class LargeModalComponent {

  public modalData = Data.modalData;
  
  constructor(private modal: NgbModal) { }

  close(){
    this.modal.dismissAll();
  }
}
