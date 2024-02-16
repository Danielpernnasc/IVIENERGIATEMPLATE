import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/social-media/social-media-data'

@Component({
  selector: 'app-latest-photos',
  templateUrl: './latest-photos.component.html',
  styleUrls: ['./latest-photos.component.scss']
})
export class LatestPhotosComponent {

  public latestPhotosData = Data.latestPhotos;

}
