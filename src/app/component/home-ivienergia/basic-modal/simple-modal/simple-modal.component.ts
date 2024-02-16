import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss']
})
export class SimpleModalComponent {
  @Input() mensagem: string;
  @Input() alerta: string;
  mensagemErro: boolean = false;
  constructor(private modal: NgbModal) { }

  close() {
    this.modal.dismissAll();
  }
}
