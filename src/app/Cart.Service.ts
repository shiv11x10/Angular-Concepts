//This is used to share data between addtocart and cartdetails component

import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable()
export class CartService {
    
    cartProducts: Product[] = [];
    constructor() {
        console.log("Cart service initialised.....")
     }

    addToCart(product:Product) {
        this.cartProducts.push(product);
        console.log(this.cartProducts);
    }

    getCartDetails() {
        return this.cartProducts;
    }

}