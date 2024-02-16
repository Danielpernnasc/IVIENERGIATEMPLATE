import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/gallery/hover'

@Component({
  selector: 'app-hover-effect',
  templateUrl: './hover-effect.component.html',
  styleUrls: ['./hover-effect.component.scss']
})
export class HoverEffectComponent {

  public imgData = Data.imgData;
  public hoverData = Data.hoverData;
  
}
