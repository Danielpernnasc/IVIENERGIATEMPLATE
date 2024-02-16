import { Component ,OnInit, Input, SimpleChanges} from '@angular/core';
import * as data from '../../../shared/data/data/tasks/task-list'
import { Tasklist,Data } from '../../../shared/data/data/tasks/task-list';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent implements OnInit{

  public taskData = data.TaskData;
  public tagData = data.TagData;
  public heading_id : number;
  public gettaskData : Tasklist;


  @Input() selectedheading_id : number;
  @Input() selectedTagId : number;
  
  constructor() {}

  ngOnInit(): void {
    this.taskData.map((data) => {
      if(data.status) {
        this.gettaskData = data;  
      } 
    })
  }

  ngOnChanges(changes : SimpleChanges){
    let id = changes['selectedheading_id']?.currentValue;
      this.taskData.map((data) => {
      if(data.title_id === id ) {
        this.gettaskData = data;  
      } 
    })
    
    let tagId = changes['selectedTagId']?.currentValue;    
    this.tagData.map((data) => {
      if(data.title_id === tagId){
        this.gettaskData = data
      }
    })
  }

}