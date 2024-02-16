import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqRoutingModule } from './faq-routing.module';
import { SharedModule } from '../../shared/shared.module';
import {  NgbAccordionModule, NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { FaqComponent } from './faq.component';
import { TopCommonFaqComponent } from './top-common-faq/top-common-faq.component';
import { SearchArticalComponent } from './search-artical/search-artical.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LatestUpdatesComponent } from './latest-updates/latest-updates.component';
import { FeaturedTutorialsComponent } from './featured-tutorials/featured-tutorials.component';
import { LatestArticalVideosComponent } from './latest-artical-videos/latest-artical-videos.component';
import { QuestionsComponent } from './questions/questions.component';


@NgModule({
  declarations: [
    FaqComponent,
    TopCommonFaqComponent,
    SearchArticalComponent,
    NavigationComponent,
    LatestUpdatesComponent,
    FeaturedTutorialsComponent,
    LatestArticalVideosComponent,
    QuestionsComponent
  ],

  imports: [
    CommonModule,
    FaqRoutingModule,
    SharedModule,
    NgbAccordionModule,
    NgbModule,
    NgbRatingModule,
  ],

  exports : [
    TopCommonFaqComponent,
    FeaturedTutorialsComponent,
    LatestArticalVideosComponent
  ]
})
export class FaqModule { }
