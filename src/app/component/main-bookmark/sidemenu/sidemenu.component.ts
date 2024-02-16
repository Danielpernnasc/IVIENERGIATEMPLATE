import { Component, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { allBookmarkData, tagData } from '../../../shared/data/data/main-bookmark/all-bookmark';
import { AddTagComponent } from '../modal/add-tag/add-tag.component';
import { NewBookmarkComponent } from '../modal/new-bookmark/new-bookmark.component';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit{

  @Output() !selectedheading_id: number;
  @Output() !selectegTagId : number;

  public open : boolean = false;
  public allBookmarkData = allBookmarkData;
  public tagData = tagData

  constructor(private modalService : NgbModal) {}

  ngOnInit(): void {}

  openMenu() {
    this.open =! this.open
  }

  openAddBookmark(){
    const modalRef = this.modalService.open(NewBookmarkComponent, { size: 'lg' });
  }

  openAddTag(){
    const modalRef = this.modalService.open(AddTagComponent, { size: 'lg' });
  }



  getData(title_id : number){
    const getHeadingData = this.allBookmarkData.filter((data) => {
      return data.title_id === title_id
    })
      this.selectedheading_id = getHeadingData[0].title_id

}

getTagData(title_id : number){
  const getHeadingData = this.tagData.filter((data) => {
    return data.title_id === title_id
  })

  this.selectegTagId = getHeadingData[0].title_id
}
}
