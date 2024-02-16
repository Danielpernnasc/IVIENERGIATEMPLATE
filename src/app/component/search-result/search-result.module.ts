import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultRoutingModule } from './search-result-routing.module';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { SharedModule } from '../../shared/shared.module';

import { SearchResultComponent } from './search-result.component';
import { AllComponent } from './all/all.component';
import { ImagesComponent } from './images/images.component';
import { VideosComponent } from './videos/videos.component';
import { AudiosComponent } from './audios/audios.component';
import { SettingsComponent } from './settings/settings.component';
import { ToolsComponent } from './tools/tools.component';


@NgModule({
  declarations: [
    SearchResultComponent,
    AllComponent,
    ImagesComponent,
    VideosComponent,
    AudiosComponent,
    SettingsComponent,
    ToolsComponent
  ],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    SharedModule,
    GalleryModule,
    LightboxModule,
  ]
})
export class SearchResultModule { }
