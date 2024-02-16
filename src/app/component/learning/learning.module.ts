import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningRoutingModule } from './learning-routing.module';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogModule } from '../blog/blog.module';

import { LearningListComponent } from './learning-list/learning-list.component';
import { DetailedCourceComponent } from './detailed-cource/detailed-cource.component';
import { LearningFilterComponent } from './learning-filter/learning-filter.component';
import { FindCourceComponent } from './learning-filter/find-cource/find-cource.component';
import { CategoriesComponent } from './learning-filter/categories/categories.component';
import { UpcomingCourcesComponent } from './learning-filter/upcoming-cources/upcoming-cources.component';


@NgModule({
  declarations: [
    LearningListComponent,
    DetailedCourceComponent,
    LearningFilterComponent,
    FindCourceComponent,
    CategoriesComponent,
    UpcomingCourcesComponent,
    
  ],
  imports: [
    CommonModule,
    LearningRoutingModule,
    NgbAccordionModule,
    NgbModule,
    BlogModule
  ]
})
export class LearningModule { }
