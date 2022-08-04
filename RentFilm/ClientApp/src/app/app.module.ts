import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';

//import { DataService } from './data.service';
import { CartComponent } from './cart/cart.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: '', component: ProductListComponent },
            { path: 'login', component: LoginComponent },
            { path: 'cart', component: CartComponent }

        ]),
    ],
    declarations: [
        AppComponent,
        TopBarComponent,
        LoginComponent,
        ProductListComponent,
        
        //ProductListComponent,
        //DataService,        
        CartComponent,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }