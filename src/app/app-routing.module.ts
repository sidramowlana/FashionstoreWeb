
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductListComponent } from './product-list/product-list.component';

const appRoutes: Routes =
    [
        { path: 'register', component: RegisterComponent },
        { path: 'login', component: LoginComponent },
        { path: 'home', component: ProductListComponent },
        // { path: 'home', component: ProductListComponent },
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: '**', redirectTo: '/home', pathMatch: 'full' },

    ];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}