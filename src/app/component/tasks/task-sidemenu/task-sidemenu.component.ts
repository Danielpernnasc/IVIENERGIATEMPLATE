import { Component, OnInit, Output } from '@angular/core';
import * as Data from '../../../shared/data/data/tasks/task-list';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewTaskComponent } from '../modal/new-task/new-task.component';
import { AddTagComponent } from '../modal/add-tag/add-tag.component';

@Component({
  selector: 'app-task-sidemenu',
  templateUrl: './task-sidemenu.component.html',
  styleUrls: ['./task-sidemenu.component.scss']
})
export class TaskSidemenuComponent implements OnInit{

  public taskSidemenu = Data.TaskData;
  public taskTagSidemenu = Data.TagData 

  @Output() selectedheading_id: number;
  @Output() selectedTagId : number;

  public open : boolean = false;

  constructor(private modalService : NgbModal) {}

  ngOnInit(): void {
  }
  
  getData(title_id : number){
      const getHeadingData = this.taskSidemenu.filter((data) => {
        return data.title_id === title_id
      })
      this.selectedheading_id = getHeadingData[0].title_id      
  }

  getTagData(title_id : number) {
    const getTagData = this.taskTagSidemenu.filter((data) => {
      return data.title_id === title_id
    })

    this.selectedTagId = getTagData[0].title_id    
  }

  openMenu() {
    this.open =! this.open
  }

  openAddTask(){
    this.modalService.open(NewTaskComponent, { size : 'lg' })
  }

  openAddTag(){
    this.modalService.open(AddTagComponent, { size : 'lg' })
  }

}
