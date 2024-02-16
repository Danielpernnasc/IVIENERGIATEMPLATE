import { Component } from '@angular/core';
import { Options } from 'ngx-slider-v2';

@Component({
  selector: 'app-disabled-slider',
  templateUrl: './disabled-slider.component.html',
  styleUrls: ['./disabled-slider.component.scss']
})
export class DisabledSliderComponent {

  value : number = 550;

  options: Options = {
    floor: 100,
    ceil: 1000,
    disabled: true,
  };
}
