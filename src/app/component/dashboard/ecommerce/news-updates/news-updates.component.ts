import { Component } from '@angular/core';
import * as newsupdates from '../../../../shared/data/data/ecommerce/news-updates'

@Component({
  selector: 'app-news-updates',
  templateUrl: './news-updates.component.html',
  styleUrls: ['./news-updates.component.scss']
})
export class NewsUpdatesComponent {

  public News_Updates = newsupdates.News_Updates
}
