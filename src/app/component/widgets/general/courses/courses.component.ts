import { Component } from '@angular/core';
import { coursesData } from '../../../../shared/data/data/widgets/widgets-data';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  public coursesData = coursesData;

}
