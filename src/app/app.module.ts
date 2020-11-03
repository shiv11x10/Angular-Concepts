import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';

import {HelloWorldComponent} from './HelloWorld.component'
import { MenuComponent } from './menu.component';
import { ProductComponent } from './Product.component';
import { LoginComponent } from './Login.component';
import { FormsModule } from '@angular/forms';
import { AddToCartComponent } from './AddToCart.component';
import { CartDetailsComponent } from './CartDetails.component';
import { CartService } from './Cart.Service';
import { CounterComponent } from './Counter.component';
import { ParentComponent } from './Parent.component';
import { TestComponent } from './Test.component';

//@NgModule: Module type class
@NgModule({
  declarations: [
    AppComponent,   //All components need to be registered in AppModule
    GreetComponent,
    HelloWorldComponent,
    MenuComponent,
    ProductComponent,
    LoginComponent,
    AddToCartComponent,
    CartDetailsComponent,
    CounterComponent,
    ParentComponent,
    TestComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule  //[(ngModel)]: two-way data binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
