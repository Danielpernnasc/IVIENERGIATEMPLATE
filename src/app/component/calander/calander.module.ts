import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalanderRoutingModule } from './calander-routing.module';
import { CalanderComponent } from './calander.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CalanderComponent
  ],
  imports: [
    CommonModule,
    CalanderRoutingModule,
    FormsModule,
    NgbModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FlatpickrModule.forRoot(),
    SharedModule,
  ]
})
export class CalanderModule { }
