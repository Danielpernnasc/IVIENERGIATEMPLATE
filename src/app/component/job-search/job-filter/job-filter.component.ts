import { Component } from '@angular/core';
import * as Data from '../../../shared/data/data/job-search/job-search';

@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.scss']
})
export class JobFilterComponent {

  public filterData = Data.filterData;
  public filterChackBox = Data.filterChackBox;
  public isCollapsed = false;
  public isCollapsed2 = false;
  public isCollapsed3 = false;
  public isCollapsed4 = false;
  OpenFilter: boolean = false

  constructor() { 
 
    
  }
  openFilter(){
    this.OpenFilter = !this.OpenFilter
  }
  ngOnInit(): void {
  }

}
