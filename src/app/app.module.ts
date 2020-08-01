import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HashLocationStrategy, LocationStrategy, DatePipe} from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BarRatingModule } from "ngx-bar-rating";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {NumberPickerModule} from 'ng-number-picker';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AdminProductComponent } from './Admin/admin-product/admin-product.component';
import { AddProductComponent } from './Admin/admin-product/add-product/add-product.component';
import { AdminCategoryComponent } from './Admin/admin-category/admin-category.component';
import { AdminProductItemComponent } from './Admin/admin-product/admin-product-list/admin-product-item/admin-product-item.component';
import { AdminProductListComponent } from './Admin/admin-product/admin-product-list/admin-product-list.component';
import { AddCategoryComponent } from './Admin/admin-category/add-category/add-category.component';
import { CategoryTableComponent } from './Admin/admin-category/category-table/category-table.component';
import { EditViewProductComponent } from './Admin/admin-product/edit-view-product/edit-view-product.component';
import { EditProductComponent } from './Admin/admin-product/edit-product/edit-product.component';
import { ProductSearchPipe } from './Pipe/product-search.pipe';
import { CategorySearchPipe } from './Pipe/category-search.pipe';
import { AdminInquiryComponent } from './Admin/overall-inquiries/admin-inquiry/admin-inquiry.component';
import { AdminInquiryListComponent } from './Admin/overall-inquiries/admin-inquiry/admin-inquiry-list/admin-inquiry-list.component';
import { AdminInquiryItemComponent } from './Admin/overall-inquiries/admin-inquiry/admin-inquiry-list/admin-inquiry-item/admin-inquiry-item.component';
import { AdminInquiryItemReplyComponent } from './Admin/overall-inquiries/admin-inquiry/admin-inquiry-item-reply/admin-inquiry-item-reply.component';
import { OverallInquiriesComponent } from './Admin/overall-inquiries/overall-inquiries.component';
import { AdminInquiryReplyComponent } from './Admin/overall-inquiries/admin-inquiry-reply/admin-inquiry-reply.component';
import { AdminOrdersComponent } from './Admin/admin-orders/admin-orders.component';
import { AdminPendingOrdersComponent } from './Admin/admin-orders/admin-pending-orders/admin-pending-orders.component';
import { PendingListComponent } from './Admin/admin-orders/admin-pending-orders/pending-list/pending-list.component';
import { PendingItemComponent } from './Admin/admin-orders/admin-pending-orders/pending-list/pending-item/pending-item.component';
import { CartOrdersListComponent } from './Admin/admin-orders/admin-pending-orders/cart-orders-list/cart-orders-list.component';
import { CartOrdersItemComponent } from './Admin/admin-orders/admin-pending-orders/cart-orders-list/cart-orders-item/cart-orders-item.component';
import { CartOrdersSelectedViewComponent } from './Admin/admin-orders/admin-pending-orders/cart-orders-selected-view/cart-orders-selected-view.component';
import { AdminCancelCompleteOrderTableComponent } from './Admin/admin-orders/admin-cancel-complete-order-table/admin-cancel-complete-order-table.component';
import { ProductItemCardComponent } from './Customer/product-items-list/product-item-card/product-item-card.component';
import { ProductItemsListComponent } from './Customer/product-items-list/product-items-list.component';
import { ProductItemDetailComponent } from './Customer/product-item-view/product-item-detail/product-item-detail.component';
import { ProductRateReviewDetailComponent } from './Customer/product-item-view/product-rate-review-detail/product-rate-review-detail.component';
import { ProductItemViewComponent } from './Customer/product-item-view/product-item-view.component';
import { RateItemComponent } from './Customer/product-item-view/product-rate-review-detail/rate-list/rate-item/rate-item.component';
import { RateListComponent } from './Customer/product-item-view/product-rate-review-detail/rate-list/rate-list.component';
import { ChildComponent } from './Customer/product-item-view/product-rate-review-detail/rate-list/child/child.component';
import { AddProductInquiryComponent } from './Customer/product-item-view/add-product-inquiry/add-product-inquiry.component';
import { AuthenticationService } from './services/authentication.service';
import { TokenStorageService } from './services/tokenStorage.service';
import { ProductService } from './services/Product.service';
import { WishlistService } from './services/Wishlist.service';
import { CartService } from './services/Cart.service';
import { TagService } from './services/Tag.service';
import { RateReviewServie } from './services/RateReview.service';
import { OrdersService } from './services/Orders.Service';
import { ProductInquiryService } from './services/ProductInquiry.service';
import { AuthInterceptor } from './helper/authInterceptorProviders';
import { WishlistItemComponent } from './Customer/wishlist-item-list/wishlist-item/wishlist-item.component';
import { WishlistItemListComponent } from './Customer/wishlist-item-list/wishlist-item-list.component';
import { CartItemComponent } from './Customer/cart-item-list/cart-item/cart-item.component';
import { CartItemListComponent } from './Customer/cart-item-list/cart-item-list.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { UserService } from './services/User.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    HomeComponent,
    HeaderComponent,
    AdminProductComponent,
    AddProductComponent,
    AdminCategoryComponent,
    AdminProductItemComponent,
    AdminProductListComponent,
    AddCategoryComponent,
    CategoryTableComponent,
    EditViewProductComponent,
    EditProductComponent,
    ProductSearchPipe,
    CategorySearchPipe,
    AdminInquiryComponent,
    AdminInquiryListComponent,
    AdminInquiryItemComponent,
    AdminInquiryItemReplyComponent,
    OverallInquiriesComponent,
    AdminInquiryReplyComponent,
    AdminOrdersComponent,
    AdminPendingOrdersComponent,
    PendingListComponent,
    PendingItemComponent,
    CartOrdersListComponent,
    CartOrdersItemComponent,
    CartOrdersSelectedViewComponent,
    AdminCancelCompleteOrderTableComponent,
    ProductItemCardComponent,
    ProductItemsListComponent,
    ProductItemDetailComponent,
    ProductRateReviewDetailComponent,
    ProductItemViewComponent,
    RateItemComponent,
    RateListComponent,
    ChildComponent,
    AddProductInquiryComponent,
    WishlistItemComponent,
    WishlistItemListComponent,
    CartItemComponent,
    CartItemListComponent,
    PaymentFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BarRatingModule,
    ToastrModule.forRoot(),
    NumberPickerModule
    ],
  providers: [AuthenticationService,
    TokenStorageService,
    ProductService,
    WishlistService,
    CartService,
    TagService,
    RateReviewServie,OrdersService,DatePipe,
    ProductInquiryService,
    UserService,
    {
      provide:HTTP_INTERCEPTORS, 
      useClass:AuthInterceptor, 
      multi:true
      }, {
        provide: LocationStrategy,
        useClass: HashLocationStrategy
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
