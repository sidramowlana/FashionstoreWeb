import { Component, OnInit, ViewChild, EventEmitter, Output } from "@angular/core";
import { NgbModalRef, NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { RateReviewServie } from "src/app/services/RateReview.service";
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public itemId: number;

  private modalRef: NgbModalRef;
  @ViewChild("childmodal") child: any;

  constructor(private modalService: NgbModal,
    private rateReviewService: RateReviewServie) { }

  ngOnInit() { }
  rateReview;
  username;
  email;
  feedback;
  rate;
  date;
  open(id) {
    this.itemId = id;
    console.log(id)
    this.rateReviewService.onGetRateReview(id).subscribe(data => {
      console.log(data);
      this.username = data.user.username;
      this.email = data.user.email;
      this.date = data.date;
      this.feedback=data.feedback;
      this.rate=data.rate;
    });

    this.modalRef = this.modalService.open(this.child);
    this.modalRef.result.then(result => { }, reason => { });
  }

  hideModal() {
    this.modalRef.close();
  }
}
