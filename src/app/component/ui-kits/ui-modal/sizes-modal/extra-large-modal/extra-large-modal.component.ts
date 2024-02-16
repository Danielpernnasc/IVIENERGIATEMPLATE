import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as Data from '../../../../../shared/data/data/ui-kits/ui-modal';

@Component({
  selector: 'app-extra-large-modal',
  templateUrl: './extra-large-modal.component.html',
  styleUrls: ['./extra-large-modal.component.scss']
})
export class ExtraLargeModalComponent {

  public modalData = Data.modalData;
  
  constructor(private modal: NgbModal) { }

  close(){
    this.modal.dismissAll();
  }
}
