import { Component } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { galleryGridData } from '../../../shared/data/data/gallery/gallery-grid';

@Component({
  selector: 'app-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.scss']
})
export class GalleryGridComponent {

  public galleryGridData = galleryGridData;
  public items : GalleryItem[];

  constructor(public gallery : Gallery, public lightbox : Lightbox) {}

  ngOnInit() {

    this.items = this.galleryGridData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize : ImageSize.Cover,
      thumbPosition : ThumbnailsPosition.Top,
    });

    lightboxRef.load(this.items)
  }

}
