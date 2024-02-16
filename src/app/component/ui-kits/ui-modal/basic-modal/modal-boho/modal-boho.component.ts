import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-boho',
  templateUrl: './modal-boho.component.html',
  styleUrls: ['./modal-boho.component.scss']
})
export class ModalBohoComponent {

  validate: boolean = false;

  public submit() {
    this.validate = !this.validate;
  }
}
