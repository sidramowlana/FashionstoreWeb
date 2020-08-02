import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/Product.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {

  constructor(private productService: ProductService) { }
  productList;
  ngOnInit() {
    this.productService.onGetProductsByTagName("Women").subscribe(data => {
      this.productList = data;
      console.log(data);
    });
  }
}