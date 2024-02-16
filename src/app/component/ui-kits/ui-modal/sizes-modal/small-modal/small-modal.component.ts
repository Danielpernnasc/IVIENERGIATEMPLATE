import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as Data from '../../../../../shared/data/data/ui-kits/ui-modal';

@Component({
  selector: 'app-small-modal',
  templateUrl: './small-modal.component.html',
  styleUrls: ['./small-modal.component.scss']
})
export class SmallModalComponent {

  public smallModalData = Data.smallModalData;
  
  constructor(private modal: NgbModal) { }

  close(){
    this.modal.dismissAll()
  }
}
