import { Component } from '@angular/core';
import * as transactionhistory from '../../../../shared/data/data/ecommerce/transaction-history'

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent {

  public transactionData = transactionhistory.TracsactionHistory;
  public isOpen : boolean = false;

  openMenu(){
    this.isOpen =! this.isOpen;
  }

}
