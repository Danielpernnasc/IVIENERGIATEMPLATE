import { Component } from '@angular/core';
import { browseArticlesData } from '../../../shared/data/data/knowledgebase/knowledgebase';

@Component({
  selector: 'app-browse-article-categories',
  templateUrl: './browse-article-categories.component.html',
  styleUrls: ['./browse-article-categories.component.scss']
})
export class BrowseArticleCategoriesComponent {

  public browseArticlesData = browseArticlesData;

}
