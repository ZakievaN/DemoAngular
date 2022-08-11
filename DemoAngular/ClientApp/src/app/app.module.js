var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
//import { AUTH_API_URL, PRODUCT_API_URL } from './app-injection-tokens'
//import { environment } from '../environments/environment';
//import { JwtModule } from '@auth0/angular-jwt';
//import { ACCESS_TOKEN_KEY } from './services/login.service'
//export function tokenGetter() {
//    return localStorage.getItem(ACCESS_TOKEN_KEY)
//}
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
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
            //JwtModule.forRoot({
            //    config: {
            //        tokenGetter,
            //        allowedDomains: environment.tokenWhiteListedDomains
            //    }
            //})
        ],
        //providers: [
        //    {
        //        provide: AUTH_API_URL,
        //        useValue: environment.authApi
        //    },
        //    {
        //        provide: PRODUCT_API_URL,
        //        useValue: environment.productApi
        //    }
        //],
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
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map