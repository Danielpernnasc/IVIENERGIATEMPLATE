import { Component } from '@angular/core';

@Component({
  selector: 'app-main-bookmark',
  templateUrl: './main-bookmark.component.html',
  styleUrls: ['./main-bookmark.component.scss']
})
export class MainBookmarkComponent {

  public listBookmark: boolean = false;


  changegrid() {
    this.listBookmark = false
  }
  changelist() {
    this.listBookmark = true
  }
}
