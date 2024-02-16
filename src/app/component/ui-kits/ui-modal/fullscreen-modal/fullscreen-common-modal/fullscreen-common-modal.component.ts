import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { commonFullScreenData } from '../../../../../shared/data/data/ui-kits/ui-modal';

@Component({
  selector: 'app-fullscreen-common-modal',
  templateUrl: './fullscreen-common-modal.component.html',
  styleUrls: ['./fullscreen-common-modal.component.scss']
})
export class FullscreenCommonModalComponent {

  @Input() title : string;
  public commonFullScreenData = commonFullScreenData;

  constructor(private modal : NgbModal){}

  close(){
    this.modal.dismissAll();
  }

}
