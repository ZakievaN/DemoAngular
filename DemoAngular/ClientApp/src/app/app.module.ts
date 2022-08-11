import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './bars/top-bar/top-bar.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListAdminComponent } from './components/product-list-admin/product-list-admin.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: '', component: ProductListAdminComponent },
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