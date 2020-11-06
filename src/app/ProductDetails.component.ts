//display the product which is clicked by finding it's id - activated route is used to get value of id

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './Product';
import { ProductService } from './Product.service';
@Component({
    selector: 'app-productdetails',
    template: `<h2>Product Details are rendered here!!!</h2>
    <h2>{{product.name}}</h2>`
})
export class ProductDetailsComponent implements OnInit {
    product:Product;
    constructor(activeroute: ActivatedRoute, service:ProductService) {
        activeroute.params.subscribe(params=>{ //use this to get value of id(implemented as observable)
              var id =  parseInt(params["id"])
              console.log(id)
             var prodarrays= service.GetProducts()
             for(var i in prodarrays)
             {
                if(prodarrays[i].id == id)
                {
                    this.product = prodarrays[i]
                    break
                }
             }
        })
     }
    ngOnInit() { 
    }
}