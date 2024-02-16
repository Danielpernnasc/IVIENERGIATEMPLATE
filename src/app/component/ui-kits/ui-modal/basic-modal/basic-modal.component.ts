import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalBohoComponent } from './modal-boho/modal-boho.component';
import { ScrollingContentComponent } from './scrolling-content/scrolling-content.component';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';
import { TooltipPopoverComponent } from './tooltip-popover/tooltip-popover.component';

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

  scrollingModal() {
    this.modal.open(ScrollingContentComponent)
  }

  tooltipPopoverModal(){
    this.modal.open(TooltipPopoverComponent, { centered : true })
  }

  bohoModal(){
    this.modal.open(ModalBohoComponent)
  }
}
