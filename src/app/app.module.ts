import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';

import {HelloWorldComponent} from './HelloWorld.component'
import { MenuComponent } from './menu.component';
import { ProductComponent } from './Product.component';
import { LoginComponent } from './Login.component';
import { FormsModule } from '@angular/forms';

//@NgModule: Module type class
@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    HelloWorldComponent,
    MenuComponent,
    ProductComponent,
    LoginComponent     //All components need to be registered in AppModule
  ],
  imports: [
    BrowserModule,
    FormsModule  //[(ngModel)]: two-way data binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
