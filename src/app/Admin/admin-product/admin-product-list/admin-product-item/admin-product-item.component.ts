import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-product-item',
  templateUrl: './admin-product-item.component.html',
  styleUrls: ['./admin-product-item.component.css']
})
export class AdminProductItemComponent implements OnInit {

  @Input() adminProductElement: Product;
  @Input() index: number;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  onProductDetails(id) {
  
    this.router.navigate(["productdetail/"+id],{relativeTo:this.activatedRoute});
  }

}
