import { Component, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import * as Data from '../../../shared/data/data/contacts/all-contact';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrintComponent } from './print/print.component';
const Swal = require('sweetalert2')

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  public editContact : boolean = false;
  public editMoreDetails : boolean = false;
  public open: boolean = false;

  @Input() selectedataid : number;
  @Input() selectedstatus : boolean;
  @Output() selectedData : Data.Allcontact;
  @Output() printData : Data.Allcontact[];

  public allcontactData = Data.AllcontactData;
  @ViewChild("printModal") PrintModal: PrintComponent;


  constructor(private modalService : NgbModal) {}

  ngOnInit(): void {
    this.allcontactData.map((data) => {
      if(data.status){
        this.selectedData = data
      }
    })   

  }

  ngOnChanges(changes : SimpleChanges){
    let id = changes['selectedataid']?.currentValue;
    this.allcontactData.map((data) => {
      if(data.id === id){
        this.selectedData = data;
      }
    })
  }

  editMoreDetail(){
    const myElement = document.getElementById("edit-information") as HTMLElement ;
    myElement.style.color = "white" 
  }

  editMoreDetail1(){
    const myElement1 = document.getElementById("edit-information") as HTMLElement ;
    myElement1.style.color = "#33BFBF"
  }

  deleteContact() {
    Swal.fire({
      text : 'This contact will be deleted from your Personal Contacts and from the chat list too.',
      title : 'Are you sure?',
      icon : 'warning',
      showCancelButton : true,
      cancelButtonColor : '#EFEFEE !important',
      confirmButtonColor : 'var(--theme-default)',
    }).then((result: { isConfirmed: boolean; isDenied: boolean; }) => {
      if(result.isConfirmed){
      }else{
        Swal.fire('', 'Your contact is safe!')
      }
    })
  }

  openHistory(){
    this.open =! this.open;
    }


}
