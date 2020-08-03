import { Component, OnInit, Input } from '@angular/core';
import { ProductInquiryService } from 'src/app/services/ProductInquiry.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-inquiries-item',
  templateUrl: './product-inquiries-item.component.html',
  styleUrls: ['./product-inquiries-item.component.css']
})
export class ProductInquiriesItemComponent implements OnInit {
  @Input() inquiryElement;

  constructor() { }

  ngOnInit() {
  }

}
