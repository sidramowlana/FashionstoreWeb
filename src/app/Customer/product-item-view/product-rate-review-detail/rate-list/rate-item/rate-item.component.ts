import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RateReview } from 'src/app/models/RateReview.model';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-rate-item',
  templateUrl: './rate-item.component.html',
  styleUrls: ['./rate-item.component.css']
})
export class RateItemComponent implements OnInit {

  @Input() rateReviewElement: RateReview;
  @Input() index: number;
  @ViewChild(ChildComponent) childModal: ChildComponent;

  constructor() { }

  ngOnInit() {
  }
  openModal(index) {
    // const id = Math.floor(Math.random() * 50);
    console.log("here: "+index)
    this.childModal.open(index);
  }
}
