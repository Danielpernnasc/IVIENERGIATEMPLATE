import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { Allbookmark, allBookmarkData, bookmarkDataInterface, tagData } from '../../../shared/data/data/main-bookmark/all-bookmark';
import { EditBookmarkComponent } from '../modal/edit-bookmark/edit-bookmark.component';

@Component({
  selector: 'app-all-bookmark',
  templateUrl: './all-bookmark.component.html',
  styleUrls: ['./all-bookmark.component.scss']
})
export class AllBookmarkComponent {

  @Input() selectedheading_id : number;
  @Input() selectegTagId : number;

  public allBookmarkData = allBookmarkData;
  public tagData = tagData
  public getBookmarkData : Allbookmark;
  public listBookmark: boolean = false;
  public editBookmarkData : bookmarkDataInterface[];
  public bookmarkData : bookmarkDataInterface[] = []
  public favouriteData : bookmarkDataInterface[];
  
  @ViewChild("editBookmarkModal") EditBookmarkModal: EditBookmarkComponent;

  ngOnInit(): void {
    this.allBookmarkData.map((data) => {
      if(data.status) {
        this.getBookmarkData = data;  
        for(let i of data.data){
          this.bookmarkData.push(i)
        }
      } 
            
    })    
  }
  
  
  changegrid() {
    this.listBookmark = false
  }
  changelist() {
    this.listBookmark = true
  }

  ngOnChanges(changes : SimpleChanges){
    let id = changes['selectedheading_id']?.currentValue;
      this.allBookmarkData.map((data) => {
      if(data.title_id === id ) {
        this.getBookmarkData = data;
      } 
    })
    
    let tagId = changes['selectegTagId']?.currentValue;    
    
    this.tagData.map((data) => {
      if(data.title_id === tagId){
        this.getBookmarkData = data;
      }
    })    
  }

  modal(id : number){    
    const a  = this.bookmarkData.filter((data) => {
      return data.id === id;
    })    
    this.editBookmarkData = a;       
    this.EditBookmarkModal.openModal(this.editBookmarkData)
  }

  favourite(id : number){
   this.favouriteData =  this.allBookmarkData[0].data.filter((data) => {
     return data.id === id;
    })
    this.favouriteData[0].favourite =! this.favouriteData[0].favourite;
  }
}
