import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/ui-kits/tag-pills';

@Component({
  selector: 'app-tag-pills',
  templateUrl: './tag-pills.component.html',
  styleUrls: ['./tag-pills.component.scss']
})
export class TagPillsComponent {

  public commonTagPillsData = Data.commonTagPillsData;
  
}
