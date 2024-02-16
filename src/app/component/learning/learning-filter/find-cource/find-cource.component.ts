import { Component } from '@angular/core';
import { findCourse } from '../../../../shared/data/data/learning/learning';

@Component({
  selector: 'app-find-cource',
  templateUrl: './find-cource.component.html',
  styleUrls: ['./find-cource.component.scss']
})
export class FindCourceComponent {

  public findCourse = findCourse;

  public isCollapsed = false;

}
