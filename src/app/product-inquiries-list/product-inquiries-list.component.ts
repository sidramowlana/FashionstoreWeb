import { Component, OnInit } from '@angular/core';
import { ProductInquiryService } from '../services/ProductInquiry.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-inquiries-list',
  templateUrl: './product-inquiries-list.component.html',
  styleUrls: ['./product-inquiries-list.component.css']
})
export class ProductInquiriesListComponent implements OnInit {
  inquiriesList;
  id;count;
  constructor(private productInquiryService: ProductInquiryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
    this.productInquiryService.onGetAllProductInquiryByProductId(this.id).subscribe(data => {
      this.inquiriesList = data;
      this.count=this.inquiriesList.length;
      console.log(data)
    });
    this.productInquiryService.productInquiryListUpdate.subscribe(data => {
      this.inquiriesList = data;
      this.count=this.inquiriesList.length;
    });

  }

}
