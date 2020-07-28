import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-inquiry-item',
  templateUrl: './admin-inquiry-item.component.html',
  styleUrls: ['./admin-inquiry-item.component.css']
})
export class AdminInquiryItemComponent implements OnInit {
  @Input() inquiryElement;
  @Input() index;
  constructor() { }

  ngOnInit() {
  }

}
