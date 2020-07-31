import { Component, OnInit, Input } from '@angular/core';
import { WishlistService } from 'src/app/services/Wishlist.service';
import { TokenStorageService } from 'src/app/services/tokenStorage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent implements OnInit {
  @Input() wishlistElement;
  @Input() index;
  constructor(private wishListService: WishlistService,
    private toastr:ToastrService,
    private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
  }

  onRemoveWishList(productId) {
    this.wishListService.onAddRemoveWishlistService(productId).subscribe(data=>{
      console.log(data);
      this.wishListService.wishListListChange.next();
      this.toastr.success(data.message);
    },
    err=>
    {
      this.toastr.error("System error");

    });
  }
  onAddCart(){
    console.log("hve to code")
  }
}
