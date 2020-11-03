import { Component, Input, OnInit } from '@angular/core';
import { Product } from './Product';
import { CartService } from './Cart.Service';

@Component({
    selector: 'app-addtocart',
    template: `
        <button (click)="addToCart()">Add To Cart</button>
    `,

    //providers:[CartService]
})
export class AddToCartComponent implements OnInit {

    @Input() //To this property it's parent can pass values(only for parent to direct child)
    cartProduct:Product;

    //_cartservcie:CartService
    constructor(private cartservice:CartService) {  //use private to use it outside of constructor
        //this._cartservcie=cartservice
    }

    addToCart() {
        // alert("added to cart");
        //alert(this.cartProduct.name + " is added");

        //Here call Cartservice

        //cartservice
        //this._cartservcie

        console.log("From add ToCart product is added "+ this.cartProduct.name);
        this.cartservice.addToCart(this.cartProduct)
    }

    ngOnInit() { 

    }

}