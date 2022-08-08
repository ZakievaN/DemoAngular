import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListAdminComponent } from './product-list-admin/product-list-admin.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: '', component: ProductListComponent },
            { path: 'admin', component: ProductListAdminComponent },
            { path: 'login', component: LoginComponent },
            { path: 'cart', component: CartComponent },
            { path: 'products/:id', component: ProductDetailsComponent },
        ]),
    ],
    declarations: [
        AppComponent,
        TopBarComponent,
        LoginComponent,
        ProductListComponent,
        ProductDetailsComponent,
        ProductListAdminComponent,
        CartComponent,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }