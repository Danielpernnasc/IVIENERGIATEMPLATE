import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { LightboxModule } from 'ng-gallery/lightbox';
import { GalleryModule } from 'ng-gallery';
import { GalleryRoutingModule } from './gallery-routing.module';
import { NgxMasonryModule } from 'ngx-masonry';

import { GalleryGridComponent } from './gallery-grid/gallery-grid.component';
import { GalleryGridDescComponent } from './gallery-grid-desc/gallery-grid-desc.component';
import { MasonryGalleryComponent } from './masonry-gallery/masonry-gallery.component';
import { MasonryDescGalleryComponent } from './masonry-desc-gallery/masonry-desc-gallery.component';
import { HoverEffectComponent } from './hover-effect/hover-effect.component';

@NgModule({
  declarations: [
    GalleryGridComponent,
    GalleryGridDescComponent,
    MasonryGalleryComponent,
    MasonryDescGalleryComponent,
    HoverEffectComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    NgbModule,
    SharedModule,
    LightboxModule,
    GalleryModule,
    NgxMasonryModule,
  ],
  exports: [
    GalleryGridComponent
  ]
})
export class MainGalleryModule { }
