import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltip-popover',
  templateUrl: './tooltip-popover.component.html',
  styleUrls: ['./tooltip-popover.component.scss']
})
export class TooltipPopoverComponent {

  constructor(private modal: NgbModal) { }

  close(){
    this.modal.dismissAll();
  }

}
