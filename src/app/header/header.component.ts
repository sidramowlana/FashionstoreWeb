import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../services/tokenStorage.service';
import { WishlistService } from '../services/Wishlist.service';
import { CartService } from '../services/Cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  wishlist;
  wishlistCount;
  cartList;
  cartListCount;
  id;
  userLoggedIn;
  constructor(private wishlistService: WishlistService, private cartService: CartService,
    private tokenStorageService: TokenStorageService, private router: Router, private activatedRoute: ActivatedRoute, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.userLoggedIn = !!this.tokenStorageService.getToken(); //checking if the token is not null
    if (this.userLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.id = user.id;
      this.onGetWishListCount();
    this.onGetCartListCount()
    this.wishlistService.wishListListCountChange.subscribe(() => {
      this.onGetWishListCount()
    });
    this.cartService.cartListCountChange.subscribe(() => {
      this.onGetCartListCount()
    });
    }
    
  }
  onGetWishListCount() {
    this.wishlistService.onGetAllWishlistByUserIdService().subscribe(data => {
      this.wishlist = data;
      this.wishlistCount = this.wishlist.length;
    });
  }
  onGetCartListCount() {
    this.cartService.onGetAllCartItemByUserIdService().subscribe(data => {
      this.cartList = data;
      this.cartListCount = this.cartList.length;
    });
  }
  onLoginSignup() {
    this.router.navigate(['login']);
  }
  onLogout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['login']);

  }
}
