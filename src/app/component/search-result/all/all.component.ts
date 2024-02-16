import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/search-result/search-result'

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent {

  public allData = Data.allData;

}
