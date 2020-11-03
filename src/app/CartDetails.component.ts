import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { CartService } from './Cart.Service';

@Component({
    selector: 'app-CartDetails',
    template: `
    
    <h2>Cart -Details</h2>

    <table>
        <tr>
        <th>Name</th>
        <th>Price</th>
        </tr>

        <tr *ngFor="let item of cartDetails ">
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>

        </tr>
    </table>
    `

    //providers:[CartService]
})
export class CartDetailsComponent implements OnInit {

    cartDetails : Product[] =[]
    constructor(cartservice:CartService) {
        
        this.cartDetails = cartservice.getCartDetails();
     }

    ngOnInit() { 

    }

}