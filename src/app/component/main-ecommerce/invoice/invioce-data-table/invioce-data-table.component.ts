import { Component } from '@angular/core';
import * as Data from '../../../../shared/data/data/ecommerce/invoice'

@Component({
  selector: 'app-invioce-data-table',
  templateUrl: './invioce-data-table.component.html',
  styleUrls: ['./invioce-data-table.component.scss']
})
export class InvioceDataTableComponent {

  public invoiceData = Data.InvoiceData
}
