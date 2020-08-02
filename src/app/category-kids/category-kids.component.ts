import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/Product.service';

@Component({
  selector: 'app-category-kids',
  templateUrl: './category-kids.component.html',
  styleUrls: ['./category-kids.component.css']
})
export class CategoryKidsComponent implements OnInit {

  constructor(private productService: ProductService) { }
  productList;
  ngOnInit() {
    this.productService.onGetProductsByTagName("Kids").subscribe(data => {
      this.productList = data;
      console.log(data);
    });
  }

}
