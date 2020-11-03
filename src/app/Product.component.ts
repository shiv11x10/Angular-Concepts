import { Component, OnInit } from '@angular/core';
import {Product} from './Product';
import { ProductService } from './Product.service';
import { CartService } from './Cart.Service';

@Component({
    selector: 'app-product',
    // templateUrl: 'fileName.component.html'
    template: `

        <app-CartDetails></app-CartDetails>

        <!--Event Binding (we can pass data from view to model)-->
        <!--<input type="text" (blur)="doSearch($event.target.value)"/>-->

        <div>
        <!--Template Ref Variable(id) : We can access given element using template ref variable in a given compoenent  -->
          <input type="text" #input1/>

          <button (click)="doSearch(input1.value)">Search</button>

          <!-- Ref variable can be used in any html tag
          <app-greet #greet></app-greet>
          {{greet.message}}
          -->

          <!-- ngIf: conditionally we can show/hide html element-->
        </div>

        <!--Pass data from model to view - Interpolation and property binding-->
        <table>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>IMage</th>
            <th>Price</th>
            <th>Category</th>
            
            </tr>
            <tr *ngFor="let product of Products; let i = index"> <!--we can pass index also with i = index-->
            <td>{{product.id}}</td>
            <td *ngIf="show">{{product.name}}</td>

            <!--Interpolation(we can do concatenation also)-->
            <!-- <td> <img  src="D:\\Courses\\{{product.prodImg}}"/></td>-->
            <td><img src="{{product.image}}"></td>
            <td *ngIf="show">{{product.price}}</td>
            
            <!--Property binding (go for this when data is other than string)-->
            <td [innerHTML]="product.category"></td>
            
            <!--Property binding to disable button for non-admin user-->
            <!--
            <td><button class = "btn btn-primary" [disabled]="!IsAdmin">Delete</button></td>

            <td><button *ngIf="!IsAdmin" class = "btn btn-primary" (click)="showDetail()">Show/hide</button></td>
            <td><button *ngIf="!IsAdmin" class = "btn btn-primary" (click)="showDetails(i)">Show Details</button></td>
            -->
            <!--Using child component and pass product detail that is clicked-->
            <td><app-addtocart [cartProduct]="product"></app-addtocart></td>
            </tr>
        </table>
    `,
    styles : [
        `img{
            width: auto;
            height: 100px;
          }   
            table{
            display: 'inline-block';
            float: left;
            margin-left: 50px;
            border: 1px solid black
          }
          
            th{
            text-align: center;
            background-color: peachpuff;
            fontWeight: bold;
            border: 1px solid black;
            padding:5px
          }
          td{
            border: 1px solid black;
            padding: 5px
          }
            `
    ], 

    //providers:[ProductService] //// register service where u want to use it
    providers: [CartService] //register here to create a single common instance for addtocart and cartdetails
})

export class ProductComponent implements OnInit {

  IsAdmin:boolean = false;
  show:boolean = true;
    Products = [];
    constructor(productservice: ProductService) {
      //we can use service class to share data between components
         //ProductService service=new ProductService
       this.Products = productservice.GetProducts()
    }

    doSearch(criteria:string) {
        var searchedProduct = []; //add products whose name starts with criteria
        for(let obj of this.Products) {
          if(obj.name.toLowerCase().startsWith(criteria.toLowerCase()))
            searchedProduct.push(obj.name);
        }
        
        alert(searchedProduct);
        // alert(criteria);
        // alert("Lost focus");
    }

    showDetail() {
      this.show = !this.show;
    }

    showDetails(i) {
      alert(this.Products[i].name + " "+ this.Products[i].price)
    }
    ngOnInit() { 

    }

}