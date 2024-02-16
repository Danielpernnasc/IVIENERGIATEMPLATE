import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Allcontact } from '../../../../shared/data/data/contacts/all-contact';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent {

  public closeResult: string;
  public modalOpen: boolean = false;

  public printData : Allcontact;

  @ViewChild("printModal", { static: false }) printModal: TemplateRef<Allcontact>;


  constructor(private modalService: NgbModal) { }

  async openModal(data:Allcontact) {
    this.printData = data
    this.modalOpen = true;
    this.modalService.open(this.printModal, {
      ariaLabelledBy: 'Confirmation-Modal',
      centered: true,
      windowClass: 'modal-lg modal-dialog-centered'
    }).result.then((result) => {
      `Result ${result}`
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: ModalDismissReasons): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



}
