import { Component } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { upcomingCourse } from '../../../../shared/data/data/learning/learning';

@Component({
  selector: 'app-upcoming-cources',
  templateUrl: './upcoming-cources.component.html',
  styleUrls: ['./upcoming-cources.component.scss']
})
export class UpcomingCourcesComponent {

  public upcomingCourse = upcomingCourse;

  public isCollapsed = false;

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }
}
