import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/search-result/search-result';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {

  public videosData = Data.videosData;
 
  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {

  }

  safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
