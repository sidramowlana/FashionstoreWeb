import { Component, OnInit } from '@angular/core';
import { ProductInquiry } from 'src/app/models/ProductInquiry.model';
import { ProductInquiryService } from 'src/app/services/ProductInquiry.service';

@Component({
  selector: 'app-admin-inquiry-reply',
  templateUrl: './admin-inquiry-reply.component.html',
  styleUrls: ['./admin-inquiry-reply.component.css']
})
export class AdminInquiryReplyComponent implements OnInit {
  productInquiryReplyList:ProductInquiry[];
  constructor(private productInquiryService:ProductInquiryService) { }

  ngOnInit() {
    this.productInquiryService.onGetAllInquiriesNotAnswered(true).subscribe(data => {
      this.productInquiryReplyList = data;
      console.log(data)
    });
    this.productInquiryService.productInquiryListUpdate.subscribe(data => {
      this.productInquiryReplyList = data;
    });
  }

}
