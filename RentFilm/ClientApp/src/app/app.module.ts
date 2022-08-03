import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { ProductListComponent } from './product-list/product-list.component';
//import { DataService } from './data.service';
//import { CartComponent } from './cart/cart.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
    ],
    declarations: [
        AppComponent,
        //ProductListComponent,
        //DataService,        
        //CartComponent
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }