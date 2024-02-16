import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExtraLargeModalComponent } from './extra-large-modal/extra-large-modal.component';
import { FullScreenModalComponent } from './full-screen-modal/full-screen-modal.component';
import { LargeModalComponent } from './large-modal/large-modal.component';
import { SmallModalComponent } from './small-modal/small-modal.component';

@Component({
  selector: 'app-sizes-modal',
  templateUrl: './sizes-modal.component.html',
  styleUrls: ['./sizes-modal.component.scss']
})
export class SizesModalComponent {

  constructor(private modal : NgbModal){}

  fullScreenModal(){
    this.modal.open(FullScreenModalComponent, { fullscreen: true })
  }

  extraLargeModal(){
    this.modal.open(ExtraLargeModalComponent, { size: 'xl' })
  }

  largeModal(){
    this.modal.open(LargeModalComponent, { size : 'lg' })
  }

  smallModal(){
    this.modal.open(SmallModalComponent, { size : 'sm' })
  }
  
}
