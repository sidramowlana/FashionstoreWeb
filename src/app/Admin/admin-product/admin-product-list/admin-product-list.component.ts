import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/Product.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {

  @Input() searchText;
  productList;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.onGetAllProductService().subscribe(data => {
      this.productList = data;
    });
  }

}
