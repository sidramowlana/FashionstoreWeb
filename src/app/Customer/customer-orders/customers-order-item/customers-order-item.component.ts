import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers-order-item',
  templateUrl: './customers-order-item.component.html',
  styleUrls: ['./customers-order-item.component.css']
})
export class CustomersOrderItemComponent implements OnInit {
  @Input() custOrderElement;
  @Input() custIndex;
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }
  onOrderDetail(index){
    console.log(index)
    this.router.navigate(['details/'+index],{relativeTo:this.activatedRoute});
  }
}
