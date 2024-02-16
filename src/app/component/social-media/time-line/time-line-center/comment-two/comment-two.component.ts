import { Component } from '@angular/core';
import * as Data from '../../../../../shared/data/data/social-media/social-media-data'

@Component({
  selector: 'app-comment-two',
  templateUrl: './comment-two.component.html',
  styleUrls: ['./comment-two.component.scss']
})
export class CommentTwoComponent {

  public commentTwoData = Data.commentTwoData;
  
}
