import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListAdminComponent } from './product-list-admin/product-list-admin.component';
//import { LoginComponent } from './login/login.component';

//import { DataService } from './data.service';
//import { CartComponent } from './cart/cart.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: '', component: ProductListAdminComponent },
        ]),
    ],
    declarations: [
        AppComponent,
        TopBarComponent,
        ProductListAdminComponent,
        //LoginComponent
        //ProductListComponent,
        //DataService,        
        //CartComponent
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }