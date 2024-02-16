import { Component ,OnInit} from '@angular/core';
import * as Data from '../../../../shared/data/data/social-media/social-media-data'

@Component({
  selector: 'app-about-center',
  templateUrl: './about-center.component.html',
  styleUrls: ['./about-center.component.scss']
})
export class AboutCenterComponent implements OnInit{

  public addFriendsData = Data.peopleKnowYouData;
  public hobbiesAndInterestData = Data.hobbiedAndInterestData;
  public eductionData = Data.eductionData;

  constructor() {}

  ngOnInit(): void {

  }
}
