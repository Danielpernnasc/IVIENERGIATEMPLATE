import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { getYear } from 'date-fns';
import locale from 'date-fns/locale/en-US';
import { DatepickerOptions } from 'ng2-datepicker';


@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss']
})
export class DateTimePickerComponent {

  date = new Date();

  time = {hour: 13, minute: 30};
  meridian = true;

  constructor() { }
  
  toggleMeridian() {
      this.meridian = !this.meridian;
  }
  ngOnInit(): void {
  }
}
