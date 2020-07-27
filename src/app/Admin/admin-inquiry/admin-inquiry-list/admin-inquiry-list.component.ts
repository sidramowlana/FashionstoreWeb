import { Component, OnInit } from '@angular/core';
import { ProductInquiry } from 'src/app/models/ProductInquiry.model';
import { ProductInquiryService } from 'src/app/services/productInquiry.service';

@Component({
  selector: 'app-admin-inquiry-list',
  templateUrl: './admin-inquiry-list.component.html',
  styleUrls: ['./admin-inquiry-list.component.css']
})
export class AdminInquiryListComponent implements OnInit {

  productInquiryList:ProductInquiry[];
  constructor(private productInquiryService:ProductInquiryService) { }

  ngOnInit() {
    this.productInquiryService.onGetAllInquiriesNotAnswered().subscribe(data => {
      this.productInquiryList = data;
      console.log(data)
    });
  }

}
