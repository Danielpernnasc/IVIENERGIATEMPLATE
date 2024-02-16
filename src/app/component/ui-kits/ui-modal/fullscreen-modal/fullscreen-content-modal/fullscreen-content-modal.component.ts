import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { fullscreenModalData } from '../../../../../shared/data/data/ui-kits/ui-modal';

@Component({
  selector: 'app-fullscreen-content-modal',
  templateUrl: './fullscreen-content-modal.component.html',
  styleUrls: ['./fullscreen-content-modal.component.scss']
})
export class FullscreenContentModalComponent {

  public fullscreenModalData = fullscreenModalData;

  constructor(private modal : NgbModal){}

  close(){
    this.modal.dismissAll();
  }

}
