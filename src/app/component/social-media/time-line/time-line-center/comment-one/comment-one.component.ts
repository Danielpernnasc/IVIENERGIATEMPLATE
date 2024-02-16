import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/social-media/social-media-data'

@Component({
  selector: 'app-comment-one',
  templateUrl: './comment-one.component.html',
  styleUrls: ['./comment-one.component.scss']
})
export class CommentOneComponent {

  public commentOneData = Data.commentOneData;
  
}
