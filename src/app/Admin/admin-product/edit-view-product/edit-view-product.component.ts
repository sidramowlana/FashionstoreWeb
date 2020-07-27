import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../../services/Product.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-edit-view-product',
  templateUrl: './edit-view-product.component.html',
  styleUrls: ['./edit-view-product.component.css']
})
export class EditViewProductComponent implements OnInit {
  product: Product;
  id;
  productName;
  description;
  price;
  quantity;
  catergory;
  scaledImage;
  cartAddMode = false;
  isFavourite = false;
  constructor(private productService: ProductService,
      private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log("this is id: " + this.id);
        this.productService.onGetProductByProductIdService(this.id).subscribe(data => {
          this.product = data;
          console.log(this.product);
          this.productName = this.product.productName
          this.description = this.product.shortDescription
          this.price = this.product.price
          this.quantity = this.product.quantity
          this.scaledImage = this.product.scaledImage
        });
      }
    );
    }

    onClose()
    {
      this.router.navigate(['/products'], { relativeTo: this.activatedRoute });
    }
}