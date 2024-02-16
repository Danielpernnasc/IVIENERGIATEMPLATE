import { Component } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-widget-calander',
  templateUrl: './widget-calander.component.html',
  styleUrls: ['./widget-calander.component.scss']
})
export class WidgetCalanderComponent {

	date: { year: number, month: number; } ;

  constructor(private calendar: NgbCalendar) {}

}
