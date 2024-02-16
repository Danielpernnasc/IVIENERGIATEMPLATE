import { Component } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-schedule-lession',
  templateUrl: './schedule-lession.component.html',
  styleUrls: ['./schedule-lession.component.scss'],
  
  
})
export class ScheduleLessionComponent {

  model: NgbDateStruct | undefined;
	date: { year: number; month: number; } | undefined;

  constructor(private calendar: NgbCalendar) {}
}
