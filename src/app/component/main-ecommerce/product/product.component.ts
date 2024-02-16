import { Component, OnInit } from '@angular/core';
import { ProductBoxFilterService } from '../../../shared/services/ecommerce/product-box-filter.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  listView: boolean = false;
  openSidebar: boolean = false;
  OpenFilter: Boolean =  false;

  constructor( private productboxfilterService:ProductBoxFilterService) { }

  gridOpens(){
    this.listView = false
    this.productboxfilterService.gridOpen()
  }
  listOpens(){
    this.listView = true
    this.productboxfilterService.listOpen()
  }
  grid2s(){
    this.listView = false
    this.productboxfilterService.grid2()

  }
  grid3s(){
    this.listView = false
    this.productboxfilterService.grid3()
  }
  grid6s(){
    this.listView = false
    this.productboxfilterService.grid6()
  }

  sidebarToggle(){
    this.openSidebar = !this.openSidebar
  }

  openFilter(){
    this.openSidebar = !this.openSidebar
  }

  ngOnInit(): void {

  }
}
