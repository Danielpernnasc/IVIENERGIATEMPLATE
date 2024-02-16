import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/form-widgets'

@Component({
  selector: 'app-common-touchspin',
  templateUrl: './common-touchspin.component.html',
  styleUrls: ['./common-touchspin.component.scss']
})
export class CommonTouchspinComponent {

  public touchspinData = Data.touchspin;
  
  decrement(i : number, n: number) {
    if(this.touchspinData[i].data[n].value > 0){
      this.touchspinData[i].data[n].value -= 1;
    }else if(this.touchspinData[i].data[n].value > 0){
      this.touchspinData[i].data[n].value -= 1;
    }
  }

  increment(i : number, n: number ) {
    this.touchspinData[i].data[n].value += 1;
  }
}
