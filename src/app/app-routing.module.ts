
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { AdminProductComponent } from './Admin/admin-product/admin-product.component';
import { AddProductComponent } from './Admin/admin-product/add-product/add-product.component';
import { AdminCategoryComponent } from './Admin/admin-category/admin-category.component';
import { EditViewProductComponent } from './Admin/admin-product/edit-view-product/edit-view-product.component';
import { OverallInquiriesComponent } from './Admin/overall-inquiries/overall-inquiries.component';
import { AdminInquiryComponent } from './Admin/overall-inquiries/admin-inquiry/admin-inquiry.component';
import { AdminInquiryItemReplyComponent } from './Admin/overall-inquiries/admin-inquiry/admin-inquiry-item-reply/admin-inquiry-item-reply.component';
import { AdminInquiryReplyComponent } from './Admin/overall-inquiries/admin-inquiry-reply/admin-inquiry-reply.component';
import { AdminOrdersComponent } from './Admin/admin-orders/admin-orders.component';
import { PendingListComponent } from './Admin/admin-orders/admin-pending-orders/pending-list/pending-list.component';
import { AdminPendingOrdersComponent } from './Admin/admin-orders/admin-pending-orders/admin-pending-orders.component';
import { CartOrdersItemComponent } from './Admin/admin-orders/admin-pending-orders/cart-orders-list/cart-orders-item/cart-orders-item.component';
import { CartOrdersSelectedViewComponent } from './Admin/admin-orders/admin-pending-orders/cart-orders-selected-view/cart-orders-selected-view.component';
import { AdminCancelCompleteOrderTableComponent } from './Admin/admin-orders/admin-cancel-complete-order-table/admin-cancel-complete-order-table.component';
import { ProductItemsListComponent } from './Customer/product-items-list/product-items-list.component';
import { ProductItemCardComponent } from './Customer/product-items-list/product-item-card/product-item-card.component';
import { ProductItemViewComponent } from './Customer/product-item-view/product-item-view.component';
import { ProductItemDetailComponent } from './Customer/product-item-view/product-item-detail/product-item-detail.component';
import { ProductRateReviewDetailComponent } from './Customer/product-item-view/product-rate-review-detail/product-rate-review-detail.component';
import { WishlistItemComponent } from './Customer/wishlist-item-list/wishlist-item/wishlist-item.component';
import { WishlistItemListComponent } from './Customer/wishlist-item-list/wishlist-item-list.component';
import { CartItemComponent } from './Customer/cart-item-list/cart-item/cart-item.component';
import { CartItemListComponent } from './Customer/cart-item-list/cart-item-list.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { AuthGuardService } from './services/authgaurd.service';

const appRoutes: Routes =
    [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        // { path: 'null', redirectTo: '/home', pathMatch: 'full' },
        {
            path: 'home', component: HomeComponent,
            children: [
                { path: '', component: ProductItemsListComponent },
                {
                    path: 'products', component: ProductItemViewComponent, children: [
                        { path: 'details/:id', component: ProductItemDetailComponent },
                        { path: 'ratesReviews/:id', component: ProductRateReviewDetailComponent }
                    ]
                },


            ]
        },
        { path: 'my-wishlist', component: WishlistItemListComponent },
        { path: 'my-cart', component: CartItemListComponent },
        { path: 'payment', component: PaymentFormComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'login', component: LoginComponent },
        {
            path: 'products', component: AdminProductComponent, canActivate: [AuthGuardService],children:
                [
                    { path: 'new', component: AddProductComponent },
                    { path: 'productdetail/:id', component: EditViewProductComponent }
                ]
        },
        {
            path: 'category', component: AdminCategoryComponent, canActivate:[AuthGuardService],children: [
                { path: 'category', component: AddProductComponent }
            ]
        },
        {
            path: 'inquiries', component: OverallInquiriesComponent,canActivate:[AuthGuardService], children:
                [
                    { path: '', redirectTo: '/inquiries/inquiry', pathMatch: 'full' },
                    { path: 'replies', redirectTo: '/inquiries/replies', pathMatch: 'full' },
                    {
                        path: 'inquiry', component: AdminInquiryComponent, children: [
                            { path: ':id', component: AdminInquiryItemReplyComponent }
                        ]
                    },
                    { path: 'replies', component: AdminInquiryReplyComponent }
                ]
        },
        {
            path: 'orders', component: AdminOrdersComponent,canActivate:[AuthGuardService], children: [
                { path: '', redirectTo: '/orders/pending', pathMatch: 'full' },
                {
                    path: 'pending', component: AdminPendingOrdersComponent, children: [
                        { path: ':id', component: CartOrdersSelectedViewComponent }]
                },
                { path: 'cancel-complete', component: AdminCancelCompleteOrderTableComponent }
            ]
        }

    ];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}