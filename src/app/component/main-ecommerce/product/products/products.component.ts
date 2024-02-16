import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Products } from '../../../../shared/modal/products.modal';
import { ProductBoxFilterService } from '../../../../shared/services/ecommerce/product-box-filter.service';
import { ProductsService } from '../../../../shared/services/ecommerce/products.service';
import { QuickViewComponent } from '../quick-view/quick-view.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  @ViewChild("confirmationModal") ConfirmationModal: QuickViewComponent;

  public value = 0;

  public listView: boolean = false;
  public col_xl_12: boolean = false;
  public col_xl_2: boolean = false;

  public col_sm_3: boolean = false;
  public col_xl_3: boolean = true;
  public xl_4: boolean = true;
  public col_sm_4: boolean = false;
  public col_xl_4: boolean = false;
  public col_sm_6: boolean = true;
  public col_xl_6: boolean = false;
  public gridOptions: boolean = true;
  public active: boolean = false;

  constructor(
    private productsService : ProductsService,
    public productboxfilterService : ProductBoxFilterService,
    public config: NgbRatingConfig ) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.productsService.products().subscribe((data) => {
      this.listData = data;
    })
  }

  listData : Products[] = [];

  ngDoCheck() {
    this.col_xl_12 = this.productboxfilterService.col_xl_12;
    this.col_xl_2 = this.productboxfilterService.col_xl_2;
    this.col_sm_3 = this.productboxfilterService.col_xl_12;
    this.col_xl_3= this.productboxfilterService.col_xl_3;
    this.xl_4 = this.productboxfilterService.xl_4;
    this.col_sm_4 = this.productboxfilterService.col_sm_4;
    this.col_xl_4 = this.productboxfilterService.col_xl_4;
    this.col_sm_6 = this.productboxfilterService.col_sm_6;
    this.col_xl_6 = this.productboxfilterService.col_xl_6;
  }

}
