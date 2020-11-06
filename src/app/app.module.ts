import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';

import {HelloWorldComponent} from './HelloWorld.component'
import { MenuComponent } from './menu.component';
import { ProductComponent } from './Product.component';
import { LoginComponent } from './Login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddToCartComponent } from './AddToCart.component';
import { CartDetailsComponent } from './CartDetails.component';
import { CounterComponent } from './Counter.component';
import { ParentComponent } from './Parent.component';
import { TestComponent } from './Test.component';
import { HeaderComponent } from './Header.component';
import { NotFoundComponent } from './NotFound.component';
import { CartService } from './Cart.Service';
import { ProductDetailsComponent } from './ProductDetails.component';
import { SignupFormComponent } from './SignupForm.component';
import { reactiveFormComponent } from './reactiveForm.component';
import { PhotosComponent } from './photos.component';
import { PipeComponent } from './pipe.component';
import { ReversePipe } from './reverse.pipe';
import { PaymentModule } from './payment.module';

var routes:Routes =[
  {
    path:'' ,  //http://localhost:4200
    redirectTo: '',
    pathMatch: 'full',
    component: GreetComponent
  },
  {
    path :'products',////http://localhost:4200/products
    component: ProductComponent,

    children:[ //display product details by id
      {
        path:'productdetails/:id',//http://localhost:4200/products/productdetails
        component: ProductDetailsComponent
      }
     ]
  },
  {
    path :'login',////http://localhost:4200/products
    component: LoginComponent
  },
  {
    path:'cart details',
    component:CartDetailsComponent
  },
  {
    path: 'registration',
    component: SignupFormComponent
  },
  {
    path: 'reactive form',
    component: reactiveFormComponent
  },
{
  path: 'photos',
  component: PhotosComponent
},
{
  path: 'pipe',
  component:PipeComponent
},
{
  path: 'payment',
  //component: PaymentComponent
  loadChildren: './payment.module#PaymentModule'

},
  {//displayed when no page is found
    path :'**',
    component: NotFoundComponent
  }
]

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
    TestComponent,
    HeaderComponent,
    NotFoundComponent,
    SignupFormComponent,
    reactiveFormComponent,
    PhotosComponent,
    PipeComponent,

    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,  //[(ngModel)]: two-way data binding
    ReactiveFormsModule,
    RouterModule.forRoot(routes), //importing route module and pass routes collection
    HttpClientModule
  ],
  providers: [CartService], //productService is defined as provideinroot
  bootstrap: [AppComponent]
})
export class AppModule { }
