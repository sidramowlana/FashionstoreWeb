import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/Product.service';

@Component({
  selector: 'app-category-women',
  templateUrl: './category-women.component.html',
  styleUrls: ['./category-women.component.css']
})
export class CategoryWomenComponent implements OnInit {
  constructor(private productService: ProductService) { }
  productList;
  ngOnInit() {
    this.productService.onGetProductsByTagName("Women").subscribe(data => {
      this.productList = data;
      console.log(data);
    });
  }
}