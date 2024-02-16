import { Component ,Output, OnInit} from '@angular/core';
import * as Data from '../../../shared/data/data/contacts/all-contact'

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.scss']
})
export class AllContactComponent implements OnInit{


  public allcontactData = Data.AllcontactData;

  @Output() selectedataid : number
  @Output() selectedstatus : boolean
  

  ngOnInit(): void {
    const getstatus = this.allcontactData.filter((data) => {
      return data.status === true
    })
    const getstatusData = getstatus[0]
    this.selectedstatus = getstatusData.status
  }

  
  getData(id : number,data:Data.Allcontact) {    
    
     const getselectedData = this.allcontactData.filter((data) => {
      return data.id === id;
     })

      const selectedata = getselectedData[0];
      this.selectedataid = selectedata.id;

      if(!data.status){
        this.allcontactData.forEach((a : Data.Allcontact) => {
          if(this.allcontactData.includes(data)){
            a.status = false;
          }
        })
      }
      data.status =! data.status     
  }

}
