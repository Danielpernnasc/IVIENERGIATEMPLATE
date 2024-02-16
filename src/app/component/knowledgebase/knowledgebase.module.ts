import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgebaseRoutingModule } from './knowledgebase-routing.module';
import { FaqModule } from '../faq/faq.module';
import { SharedModule } from '../../shared/shared.module';

import { KnowledgebaseComponent } from './knowledgebase.component';
import { KnowledgebaseTopDataComponent } from './knowledgebase-top-data/knowledgebase-top-data.component';
import { BrowseArticleCategoriesComponent } from './browse-article-categories/browse-article-categories.component';
import { KnowledgebaseFooterDataComponent } from './knowledgebase-footer-data/knowledgebase-footer-data.component';


@NgModule({
  declarations: [
    KnowledgebaseComponent,
    KnowledgebaseTopDataComponent,
    BrowseArticleCategoriesComponent,
    KnowledgebaseFooterDataComponent
  ],
  imports: [
    CommonModule,
    KnowledgebaseRoutingModule,
    SharedModule,
    FaqModule,
  ]
})
export class KnowledgebaseModule { }
