import { Component } from '@angular/core';
import { commentsData } from '../../../shared/data/data/learning/learning';
@Component({
  selector: 'app-detailed-cource',
  templateUrl: './detailed-cource.component.html',
  styleUrls: ['./detailed-cource.component.scss']
})
export class DetailedCourceComponent {

  public commentsData = commentsData;

}
