import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AdminProductComponent } from './Admin/admin-product/admin-product.component';
import { AddProductComponent } from './Admin/admin-product/add-product/add-product.component';
import { AdminProductItemComponent } from './Admin/admin-product/admin-product-list/admin-product-item/admin-product-item.component';
import { AdminProductListComponent } from './Admin/admin-product/admin-product-list/admin-product-list.component';
import { AddCategoryComponent } from './Admin/admin-category/add-category/add-category.component';
import { CategoryTableComponent } from './Admin/admin-category/category-table/category-table.component';
import { AuthenticationService } from './services/authentication.service';
import { TokenStorageService } from './services/tokenStorage.service';
import { ProductService } from './services/Product.service';
import { WishlistService } from './services/Wishlist.service';
import { CartService } from './services/Cart.service';
import { TagService } from './services/Tag.service';
import { AuthInterceptor } from './helper/authInterceptorProviders';
import { AdminCategoryComponent } from './Admin/admin-category/admin-category.component';
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
import { ProductInquiryService } from './services/ProductInquiry.service';
import { BarRatingModule } from "ngx-bar-rating";
import { RateReviewServie } from './services/RateReview.service';
import { AdminOrdersComponent } from './Admin/admin-orders/admin-orders.component';
import { AdminPendingOrdersComponent } from './Admin/admin-orders/admin-pending-orders/admin-pending-orders.component';
import { PendingListComponent } from './Admin/admin-orders/admin-pending-orders/pending-list/pending-list.component';
import { PendingItemComponent } from './Admin/admin-orders/admin-pending-orders/pending-list/pending-item/pending-item.component';
import { OrdersService } from './services/Orders.Service';
import { CartOrdersListComponent } from './Admin/admin-orders/admin-pending-orders/cart-orders-list/cart-orders-list.component';
import { CartOrdersItemComponent } from './Admin/admin-orders/admin-pending-orders/cart-orders-list/cart-orders-item/cart-orders-item.component';
import { CartOrdersSelectedViewComponent } from './Admin/admin-orders/admin-pending-orders/cart-orders-selected-view/cart-orders-selected-view.component';
import { AdminCancelCompleteOrderTableComponent } from './Admin/admin-orders/admin-cancel-complete-order-table/admin-cancel-complete-order-table.component';
import { ProductItemCardComponent } from './Customers/product-item-card/product-item-card.component';

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
    ProductItemCardComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BarRatingModule
    ],
  providers: [AuthenticationService,TokenStorageService,ProductService,WishlistService,CartService,TagService,ProductInquiryService,RateReviewServie,OrdersService,
    {
      provide:HTTP_INTERCEPTORS, 
      useClass:AuthInterceptor, 
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
