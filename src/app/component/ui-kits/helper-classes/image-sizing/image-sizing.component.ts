import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ui-kits/helper-classes'

@Component({
  selector: 'app-image-sizing',
  templateUrl: './image-sizing.component.html',
  styleUrls: ['./image-sizing.component.scss']
})
export class ImageSizingComponent {

  public imageSizeData = Data.imageSizeData;
  
}
