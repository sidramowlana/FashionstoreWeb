import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/Product.service';

@Component({
  selector: 'app-category-men',
  templateUrl: './category-men.component.html',
  styleUrls: ['./category-men.component.css']
})
export class CategoryMenComponent implements OnInit {

  constructor(private productService: ProductService) { }
  productList;
  ngOnInit() {
    this.productService.onGetProductsByTagName("Men").subscribe(data => {
      this.productList = data;
      console.log(data);
    });
  }
}