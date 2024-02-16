import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/forms/form-widgets'

@Component({
  selector: 'app-rounded-touchspin',
  templateUrl: './rounded-touchspin.component.html',
  styleUrls: ['./rounded-touchspin.component.scss']
})
export class RoundedTouchspinComponent {

  public roundedTouchspinData = Data.roundedTouchspin;


  decrement(i : number) {
    if(this.roundedTouchspinData[i].value > 0){
      this.roundedTouchspinData[i].value -= 1;
    }
  }

  increment(i : number) {
    this.roundedTouchspinData[i].value += 1;
  }
}
