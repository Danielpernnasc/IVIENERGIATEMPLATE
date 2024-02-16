import { Component ,OnInit} from '@angular/core';
import * as Chart from '../../../shared/data/charts/widget-general-charts'

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit{

  // Currency
  public bitcoinChart = Chart.bitcoinChart;
  public ethereumChart = Chart.ethereumChart;
  public leavetravelChart = Chart.leavetravelChart;
  
  // Avarage Of Days
  public averagesaleChart = Chart.AvarageSalesPerDayChart;
  public averageprofitChart = Chart.AvarageProfitPerDayChart;

  // Product Status Chart Box
  public purchase = Chart.purchase;
  public sale = Chart.sales;
  public salereturn = Chart.salesReturn;
  public purchaserate = Chart.purchaseRate

  // Social Media
  public facebook = Chart.FacebookChart;
  public twitter = Chart.TwitterChart;
  public instagram = Chart.InstagramChart;
  public youtube = Chart.YoutubeChart;

  constructor() {}

  ngOnInit(): void {    
  }

  
}
