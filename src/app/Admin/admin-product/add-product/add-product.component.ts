import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TagService } from 'src/app/services/Tag.service';
import { ProductService } from 'src/app/services/Product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm:FormGroup;
  categoryList;
  message;
  isSubmitted;
  isError;
  editMode
  constructor(private router:Router,private toastr:ToastrService,private activatedRoute:ActivatedRoute,private tagService:TagService,private productService:ProductService) { }

  ngOnInit() {
    this.initForm();
    this.tagService.onGetAllTags().subscribe(data => {
      this.categoryList = data;    
    });
  }
  initForm()
  {
    this.productForm = new FormGroup({
      'scaledImage': new FormControl(null, Validators.required),
      'productName': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'quantity': new FormControl(null, Validators.required),
      'catergoryArray': new FormControl(null, Validators.required),
      'shortDescription': new FormControl(null, Validators.required)
    });
  }
  onClose(){
    this.router.navigate(['./'],{relativeTo:this.activatedRoute});
  }

  onAddProduct()
  {
    console.log(this.productForm);
    this.productService.onAddProduct(this.productForm).subscribe(data=>
      {
        this.toastr.success(data.message);
        this.productForm.reset();
        this.router.navigate(['/products']);

      },
      err=>
      {
        this.toastr.error(err.error.message);
      })
  }
}
