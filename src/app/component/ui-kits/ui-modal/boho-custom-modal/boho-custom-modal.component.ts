import { Component, TemplateRef } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/ui-modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-boho-custom-modal',
  templateUrl: './boho-custom-modal.component.html',
  styleUrls: ['./boho-custom-modal.component.scss']
})
export class BohoCustomModalComponent {

  public bohoCustomModalData = Data.bohoCustomModalData;

  constructor(private modalService: NgbModal) { }

  openProfileModal(profileContent: TemplateRef<NgbModal>){
    const modalRef = this.modalService.open(profileContent, { centered: true });
  }

  openResultModal(resultContent: TemplateRef<NgbModal>){
    const modalRef = this.modalService.open(resultContent, { centered: true });
  }

  openBalancedModal(balancedContent: TemplateRef<NgbModal>){
    const modalRef = this.modalService.open(balancedContent, { centered: true });
  }
  
}
