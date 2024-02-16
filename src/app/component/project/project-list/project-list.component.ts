import { Component, OnInit } from '@angular/core';
import * as Data from '../../../shared/data/data/project/project-list'

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit{

  active = 1
  public openTab : string = "All";


  // Data
  public ProjectListData = Data.ProjectList;
  filterData : Data.projectList[] = this.ProjectListData
  
  constructor() {}

  ngOnInit(): void {}

  //Filter data
  tabbed(val : string){
    this.openTab = val;
    this.filterData = val !== 'All' ? this.ProjectListData.filter((data : Data.projectList) => {
      return data.badge == this.openTab ? true : false
    }) : this.ProjectListData
  }
}


